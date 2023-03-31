import { useState, useEffect } from 'react'
import retrieveMyStickies from '../logic/retrieve-my-stickies'
import Container from '../library/Container'
import Item from './Item'

function MyList({ listUpdateStamp }) {
    console.log('Mylist -> render')

    const [stickies, setStickies] = useState([])

    const loadList = () => {
        try {
            retrieveMyStickies(sessionStorage.userId, (error, stickies) => {
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

    return <Container TagName="ul">
        {stickies.map(sticky => <Item element={sticky} key={sticky._id} onUpdateVisibility={sticky} onDelete={loadList} onToggleLike={loadList} />)}

    </Container>
}

export default MyList