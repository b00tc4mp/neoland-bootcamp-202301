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

    const handleChangeColor = (stickyId, color) => {
        setStickies(stickies => {
            const index = stickies.findIndex(sticky => sticky._id === stickyId)

            const sticky = stickies[index]

            const stickyUpdated = { ...sticky }
            stickyUpdated.color = color

            const stickiesUpdated = [...stickies]

            stickiesUpdated[index] = stickyUpdated

            return stickiesUpdated
        })
    }

    const handleRemoveFromList = (stickyId) => {
        setStickies(stickies => {
            const index = stickies.findIndex(sticky => sticky._id === stickyId)

            const stickiesUpdated = [...stickies]

            stickiesUpdated.splice(index, 1)

            return stickiesUpdated
        })
    }

    const handleToggleLike = (userId, stickyId) => {
        setStickies(stickies => {
            const index = stickies.findIndex(sticky => sticky._id === stickyId)

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

    const handleUpdateVisibility = (stickyId, visibility) => {
        setStickies(stickies => {
            const index = stickies.findIndex(sticky => sticky._id === stickyId)

            const sticky = stickies[index]

            const stickyUpdated = { ...sticky }
            stickyUpdated.visibility = visibility

            const stickiesUpdated = [...stickies]

            stickiesUpdated[index] = stickyUpdated

            return stickiesUpdated
        })
    }

    return <Container TagName="ul">
        {stickies.map(sticky => <Item element={sticky} key={sticky._id} onUpdateVisibility={handleUpdateVisibility} onDelete={handleRemoveFromList} onToggleLike={handleToggleLike} onChangeColor={handleChangeColor} />)}
    </Container>
}

export default MyList