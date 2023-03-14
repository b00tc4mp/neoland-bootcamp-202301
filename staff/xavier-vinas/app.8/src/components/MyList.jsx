import { useState, useEffect } from 'react'
import retrieveMyStickies from '../logic/retrieve-my-stickies'
import Container from '../library/Container'
import Item from './Item'

function MyList({ updateStamp }) {
    console.log('MyList -> render')

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
    }, [updateStamp])

    return <Container TagName="ul" className="gap-5">
        {stickies.map(sticky => <Item key={sticky._id} element={sticky} onUpdateVisibility={loadList} onDelete={loadList} onToggleLike={loadList} onUpdateColor={loadList} />)}
    </Container>
}

export default MyList