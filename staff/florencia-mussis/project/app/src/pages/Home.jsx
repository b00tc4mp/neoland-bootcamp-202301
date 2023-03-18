import { useState, useEffect, useContext } from "react"
import retrieveUser from "../logic/retrieve-user"
import retrieveMyLists from "../logic/retrieve-my-lists"
import createList from "../logic/create-list"
import Context from '../Context'
import Container from "../library/Container"
import List from "../components/List"
import { Routes, Route, useLocation, useSearchParams} from 'react-router-dom'
import ListDetail from "../components/ListDetail"
import searchList from "../logic/search-list"

function Home() {
    console.log('Home -> render')
    
    let [searchParams, setSearchParams] = useSearchParams();

    
    const { alert } = useContext(Context)

    const [user, setUser] = useState({})

    const [lists, setLists] = useState([])

    const location = useLocation()

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

    useEffect(()=>{
        if(searchParams.get('q')) {

            handlerRetrieveSearchedList()
        }
    },[searchParams])

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

    const loadSearchedList = () =>{
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

    const handlerRetrieveSearchedList = ()=>{
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

        setSearchParams({q: event.target.search.value})
    }

    return <Container>

        <Container TagName="form" onSubmit={handleSearchList} className="justify-center gap-6">
            <input className="border-2 rounded-md w-56 drop-shadow-sm" type="search" name="search" placeholder="Search list" />
          <button type="submit" className="drop-shadow-sm text-3xl">🔍</button>
        </Container>

        {(location.pathname === '/') && <div className="flex justify-center border-2 rounded-md w-2/12">
            <button className="drop-shadow-sm text-4xl" onClick={handleAdd}>+</button>
        </div>}

        <Routes>
            <Route path="/"
                element={<Container TagName="ul" className="gap-4 m-3">
                    {lists.map(list => <List onDeleteList={handleDeleteList} key={list.id} element={list} />)}
                </Container>}>
            </Route>


            <Route path="/lists/:listId"
                element={<ListDetail />}>
            </Route>
        </Routes>

    </Container>
}

export default Home