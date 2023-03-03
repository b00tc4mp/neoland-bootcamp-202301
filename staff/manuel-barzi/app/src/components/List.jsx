import { useState, useEffect } from 'react'
import retrievePublicStickies from '../logic/retrieve-public-stickies'
import Container from '../library/Container'
import Item from './Item'

function List({ updateStamp }) {
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
    }, [updateStamp])

    return <Container TagName="ul" className="gap-5">
        {stickies.map(sticky => <Item element={sticky} onUpdateVisibility={loadList} onDelete={loadList} onToggleLike={loadList} onUpdateColor={loadList} />)}
    </Container>
}

export default List