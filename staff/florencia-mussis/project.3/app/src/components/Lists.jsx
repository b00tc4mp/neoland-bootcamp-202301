import { useState, useEffect, useContext, useRef } from "react"
import createList from "../logic/create-list"
import List from "../components/List"
import retrieveMyLists from "../logic/retrieve-my-lists"
import searchList from "../logic/search-list"
import Context from '../Context'
import Container from "../library/Container"
import { useLocation, useSearchParams } from 'react-router-dom'

function Lists({refreshTime}) {
    console.log('Home -> render')

    const { alert } = useContext(Context)

    let [searchParams, setSearchParams] = useSearchParams();

    const location = useLocation()

    const [lists, setLists] = useState([])

    const formRef = useRef(null)

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

    useEffect(() => {
        if (searchParams.get('q')) {
            loadSearchedList()
        }
    }, [searchParams])

    useEffect(() => {
        loadLists()

        formRef.current.reset()
    }, [refreshTime])

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

    return <div className="h-full">

        <main className="py-10">
            <div>
                {(location.pathname === '/') &&
                    <form ref={formRef} onSubmit={handleSearchList} className="flex justify-center  gap-2">
                        <input className="border-2 h-11 rounded-md w-2/5 px-2 text-xl focus:outline-teal-500 sm: w-60" type="search" name="search" placeholder=" Search list" />
                        <button type="submit" className="text-3xl">🔍</button>
                    </form>
                }
            </div>

            {(location.pathname === '/') &&
                <div className="flex rounded-md pt-4">
                    <button className="text-4xl flex m-auto " onClick={handleAdd}>+</button>
                </div>}

            <Container TagName="ul" className="gap-4 m-3">{lists.map(list => <List onDeleteList={handleDeleteList} onUpdateArchived={handleDeleteList} key={list.id} element={list} />)}</Container>
        </main>
    </div>
}

export default Lists