import { useState, useEffect, useContext } from 'react'
import Container from "../library/Container"
import retrieveArchivedLists from '../logic/retrieve-archived-lists'
import List from './List'
import Context from '../Context'

function Archived({ listUpdateStamp }) {
    const { alert } = useContext(Context)

    const [lists, setLists] = useState([])

    const loadList = () => {
        try {
            retrieveArchivedLists(sessionStorage.token, (error, lists)=>{
                if (error){
                    alert(error.message)

                    return
                }
                setLists(lists)
            })
        }catch (error){
            alert(error.message)
        }
    }

    useEffect(() => {
        loadList()
    }, [listUpdateStamp])

    const handleDeleteList = listId => {
        setLists(lists => {
            const index = lists.findIndex(list => list.id === listId)

            const listsUpdated = [...lists]

            listsUpdated.splice(index, 1)

            return listsUpdated
        })
    }

    return <Container TagName="ul" className="gap-4 m-3 sm: w-11/12">
        {lists.map(list => <List onDeleteList={handleDeleteList} onUpdateArchived={handleDeleteList} key={list.id} element={list}/>)}
    </Container>
}

export default Archived

