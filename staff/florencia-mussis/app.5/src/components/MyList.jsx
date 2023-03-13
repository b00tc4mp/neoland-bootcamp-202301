import { useEffect, useState } from "react"
import retrieveMyStickies from "../logic/retrieve-my-stickies"
import Container from '../library/Container'
import Item from './Item'

function MyList({ listUpdateStamp }) {

    const [stickies, setStickies] = useState([])

    const loadList = () => {
        try {
            retrieveMyStickies(sessionStorage.userId, (error, stickies) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setStickies(stickies.reverse())
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

            // const stickyUpdated = {}
            // stickyUpdated._id = sticky._id
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
            const index = stickies.findIndex(sticky => sticky._id === stickyId)

            const stickiesUpdated = [...stickies]

            stickiesUpdated.splice(index, 1)

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

    const handleLike = (userId, stickyId) => {
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


    return <Container TagName="ul" className="gap-4 m-3">
        {stickies.map(sticky => <Item key={sticky._id} element={sticky} onUpdateVisibility={handleUpdateVisibility} onDelete={handleRemoveFromList} onToggleLike={handleLike} onChangeColor={handleChangeColor} />)}
    </Container>

}

export default MyList