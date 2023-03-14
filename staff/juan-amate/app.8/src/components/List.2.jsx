import { useState, useEffect } from 'react'
import retrievePublicStickies from '../logic/retrieve-public-stickies'
import Container from '../library/Container'
import Item from './Item'

function List({ listUpdateStamp }) {
    console.log('List -> render')

    const [stickies, setStickies] = useState([])

    const loadList = () => {
        try {
            retrievePublicStickies(sessionStorage.userId, (error, stickies) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setStickies(stickies)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {
        loadList()
    }, [listUpdateStamp])

    return <Container TagName='ul'>
        {stickies.map(sticky => <Item element={sticky} key={sticky._id} onUpdateVisibility={loadList} onDelete={loadList} onToggleLike={loadList} onUpdateColor={loadList} />)}
    </Container>
}

export default List