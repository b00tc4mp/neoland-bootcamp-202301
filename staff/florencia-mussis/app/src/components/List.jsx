import { useState, useEffect } from "react"
import retrievePublicStickies from "../logic/retrieve-public-stickies"
import Container from '../library/Container'
import Item from './Item'

function List({ listUpdateStamp, userFromHome }) {
    console.log('List ->render')

    const [stickies, setStickies] = useState([])
    const [user, setUser] = useState(userFromHome)
    console.log(user)

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
    useEffect(() => { //se pinta solo al cargar el componente si quiero que se refresque debo indicarlo dentro de los []
        loadList()
        setUser(userFromHome)
    }, [listUpdateStamp, userFromHome])


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

    const handleFavs = (userId, stickyId) => {
        setUser(user => {
            const copyOfUser = {...user}

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

    return <Container TagName="ul" className="gap-4 m-3">
        {stickies.map(sticky => <Item key={sticky._id} element={sticky} onUpdateVisibility={handleRemoveFromList} onDelete={handleRemoveFromList} onToggleLike={handleLike} onColor={handleChangeColor} onToggleFavs={handleFavs} userFromHome={user}/>)}
    </Container>
}

export default List