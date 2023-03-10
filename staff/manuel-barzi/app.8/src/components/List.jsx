import { useState, useEffect } from 'react'
import retrievePublicStickies from '../logic/retrieve-public-stickies'
import Container from '../library/Container'
import Item from './Item'

function List({ updateStamp, user, onToggleFav }) {
    console.log('List -> render')

    const [stickies, setStickies] = useState([])

    const loadList = () => {
        try {
            retrievePublicStickies(sessionStorage.token, (error, stickies) => {
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

    const handleUpdateColor = (stickyId, color) => {
        setStickies(stickies => {
            const index = stickies.findIndex(sticky => sticky.id === stickyId)

            const sticky = stickies[index]

            // const stickyUpdated = {}
            // stickyUpdated.id = sticky.id
            // stickyUpdated.user = sticky.user
            // stickyUpdated.text = sticky.text
            // stickyUpdated.visibility = sticky.visibility
            // stickyUpdated.color = color
            // stickyUpdated.likes = sticky.likes
            const stickyUpdated = { ...sticky }
            stickyUpdated.color = color

            //const stickiesUpdated = stickies.concat()
            const stickiesUpdated = [...stickies]

            //stickiesUpdated.splice(index, 1, stickyUpdated)
            stickiesUpdated[index] = stickyUpdated

            return stickiesUpdated
        })
    }

    const handleRemoveFromList = stickyId => {
        setStickies(stickies => {
            const index = stickies.findIndex(sticky => sticky.id === stickyId)

            const stickiesUpdated = [...stickies]

            stickiesUpdated.splice(index, 1)

            return stickiesUpdated
        })
    }

    const handleToggleLike = (userId, stickyId) => {
        setStickies(stickies => {
            const index = stickies.findIndex(sticky => sticky.id === stickyId)

            const sticky = stickies[index]

            const stickyUpdated = { ...sticky }
            stickyUpdated.likes = [...sticky.likes]

            const { likes } = stickyUpdated

            const indexOfUser = likes.indexOf(userId)

            if (indexOfUser < 0)
                likes.push(userId)
            else
                likes.splice(indexOfUser, 1)

            const stickiesUpdated = [...stickies]

            stickiesUpdated[index] = stickyUpdated

            return stickiesUpdated
        })
    }

    return <Container TagName="ul" className="gap-5">
        {stickies.map(sticky => <Item key={sticky.id} element={sticky} onUpdateVisibility={handleRemoveFromList} onDelete={handleRemoveFromList} onToggleLike={handleToggleLike}  onToggleFav={onToggleFav} onUpdateColor={handleUpdateColor} user={user} />)}
    </Container>
}

export default List