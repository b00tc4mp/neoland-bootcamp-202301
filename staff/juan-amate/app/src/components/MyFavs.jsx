import { useState, useEffect } from 'react'
import retrieveFavsStickies from '../logic/retrieve-favs-stickies'
import Container from '../library/Container'
import Item from './Item'

function MyFavs({ listUpdateStamp, userFromHome }) {
    console.log('MyFavs -> render')

    const [stickies, setStickies] = useState([])
    const [user, setUser] = useState(userFromHome)
    console.log(user)

    const loadList = () => {
        try {
            retrieveFavsStickies(sessionStorage.userId, (error, stickies) => {
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
        setUser(userFromHome)
    }, [listUpdateStamp, userFromHome])

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

    const handleRemoveFromList = stickyId => {
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

    const handleToggleFavs = (userId, stickyId) => {
        setUser(user => {
            const copyOfUser = { ...user }

            const favs = [...copyOfUser.favs]

            const indexOfSticky = favs.indexOf(stickyId)

            if (indexOfSticky < 0)
                favs.push(stickyId)
            else
                favs.splice(indexOfSticky, 1)

            copyOfUser.favs = favs

            return copyOfUser
        })
    }

    return <Container TagName='ul'>
        {stickies.map(sticky => <Item element={sticky} key={sticky._id} onUpdateVisibility={handleUpdateVisibility} onDelete={handleRemoveFromList} onToggleLike={handleToggleLike} onChangeColor={handleChangeColor} onToggleFavs={handleToggleFavs} userFromHome={user} />)}
    </Container>
}

export default MyFavs