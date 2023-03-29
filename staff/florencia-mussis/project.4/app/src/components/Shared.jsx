import { useState, useEffect, useContext } from 'react'
import Container from "../library/Container"
import retrieveListsSharedWithMe from '../logic/retrieve-lists-shared-with-me'
import List from './List'
import Context from '../Context'

function Shared({ listUpdateStamp }) {
    const { alert } = useContext(Context)

    const [lists, setLists] = useState([])

    const loadList = () => {
        try {
            retrieveListsSharedWithMe(sessionStorage.token, (error, lists)=>{
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

    return <Container TagName="ul" className="py-8 gap-4 m-3 sm: w-11/12">
        {lists.map(list => <List  key={list.id} element={list}/>)}
    </Container>
}

export default Shared
