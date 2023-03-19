import { useState, useEffect, useContext } from "react"
import retrieveUser from "../logic/retrieve-user"
import retrieveMyLists from "../logic/retrieve-my-lists"
import createList from "../logic/create-list"
import Context from '../Context'
import Container from "../library/Container"
import List from "../components/List"
import { Routes, Route, useLocation, useSearchParams, Link, useNavigate } from 'react-router-dom'
import ListDetail from "../components/ListDetail"
import searchList from "../logic/search-list"
import icono from "../img/icono.png"
import Button from "../library/Button"
import Archived from "../components/Archived"
import Profile from "../components/Profile"
import { BookmarkIcon } from '@heroicons/react/24/solid'

function Home() {
    console.log('Home -> render')

    const { alert } = useContext(Context)

    let [searchParams, setSearchParams] = useSearchParams();

    const navigate = useNavigate()
    const location = useLocation()

    const [user, setUser] = useState({})

    const [lists, setLists] = useState([])

    const [listUpdateStamp, setListUpdateStamp] = useState(Date.now())

    useEffect(() => {
        try {
            retrieveUser(sessionStorage.token, (error, user) => {
                if (error) {
                    alert(error.message)

                    return
                }
                setUser(user)
            })
        } catch (error) {
            alert(error.message)
        }
        handlerRetrieveMyLists()
    }, [])

    useEffect(() => {
        if (searchParams.get('q')) {

            handlerRetrieveSearchedList()
        }
    }, [searchParams])

    const loadLists = () => {
        try {
            retrieveMyLists(sessionStorage.token, (error, lists) => {
                if (error) {
                    alert(error.message)

                    return
                }
                setLists(lists)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handlerRetrieveMyLists = () => {
        loadLists()
    }

    const loadSearchedList = () => {
        try {
            searchList(sessionStorage.token, searchParams.get('q'), (error, lists) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setLists(lists)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handlerRetrieveSearchedList = () => {
        loadSearchedList()
    }

    const handleAdd = () => {
        try {
            createList(sessionStorage.token, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                loadLists()
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleDeleteList = listId => {
        setLists(lists => {
            const index = lists.findIndex(list => list.id === listId)

            const listsUpdated = [...lists]

            listsUpdated.splice(index, 1)

            return listsUpdated

        })
    }

    const handleSearchList = event => {
        event.preventDefault()

        setSearchParams({ q: event.target.search.value })
    }

    const handleLogout = () => {
        delete sessionStorage.token

        navigate('/login')
    }


    return <div className="h-full">
   
        <header className="fixed top-0 w-full flex justify-between p-2 shadow-md">
            <Link to="/" className="w-16" href=""><img src={icono} />
            </Link>

            <nav className="flex items-center gap-5">
                 <Link to="/archived" className="logout-link m-3" href=""><BookmarkIcon className="h-8 w-8"/></Link>

                <Link to="/profile" className="profile-link font-montserrat" href="">{user.name}</Link>

                <Button onClick={handleLogout} className="w-24 text-sm h-7 rounded-md" type="submit">Logout</Button>
            </nav>
        </header>

        <main className="py-20">
            <div>
                {(location.pathname === '/') &&
                    <form onSubmit={handleSearchList}  className="flex justify-center pt-6 gap-2">
                        <input className="border-2 h-11 rounded-md w-2/5 px-2 drop-shadow-sm text-xl focus:outline-teal-500" type="search" name="search" placeholder=" Search list" />
                        <button type="submit" className="drop-shadow-sm text-3xl">🔍</button>
                    </form> 
                }
            </div>

            {(location.pathname === '/') &&
             <div className="flex rounded-md pt-4">
                <button className="drop-shadow-sm text-4xl flex m-auto " onClick={handleAdd}>+</button>
            </div>}

            <Routes>
                <Route path="/" 
                element={<Container TagName="ul" className="gap-4 m-3">{lists.map(list => <List listUpdateStamp={listUpdateStamp} onDeleteList={handleDeleteList} onUpdateArchived={handleDeleteList} key={list.id} element={list}/>)}</Container>}>
                </Route>

                <Route path="/archived" element={<Archived listUpdateStamp={listUpdateStamp} />} />

                <Route path="/lists/:listId"
                    element={<ListDetail listUpdateStamp={listUpdateStamp}/>}>
                </Route>

                <Route path="/profile" element={<Profile onUnregisterUser={handleLogout} />} />

            </Routes>
        </main>
    </div>
}

export default Home