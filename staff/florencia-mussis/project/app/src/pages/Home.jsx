import { useState, useEffect, useContext } from "react"
import retrieveUser from "../logic/retrieve-user"
import retrieveMyLists from "../logic/retrieve-my-lists"
import createList from "../logic/create-list"
import Context from '../Context'
import Container from "../library/Container"
import List from "../components/List"
import { Routes, Route, useLocation } from 'react-router-dom'
import ListDetail from "../components/ListDetail"

function Home() {
    console.log('Home -> render')

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

    const handlerRetrieveMyLists =()=> {
        loadLists()
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
        setLists(lists =>{
            const index = lists.findIndex(list => list.id === listId)

            const listsUpdated = [...lists]

            listsUpdated.splice(index, 1)

            return listsUpdated

        })
    }


    return <Container>
       {(location.pathname === '/') && <div className="flex justify-center border-2 rounded-md w-2/12">
            <button className="drop-shadow-sm text-4xl" onClick={handleAdd}>+</button>
        </div>}

        <Routes>
            <Route path="/"
                element={<Container TagName="ul" className="gap-4 m-3">
                    {lists.map(list => <List onDeleteList={handleDeleteList} key={list.id} element={list}/>)}
                </Container>}>
            </Route>

            <Route path="/lists/:listId"
                element={<ListDetail/>}>
            </Route>
        </Routes>

    </Container>
}

export default Home