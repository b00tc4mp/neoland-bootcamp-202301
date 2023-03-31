import { useState, useEffect } from 'react'
import retrieveFavStickies from '../logic/retrieve-fav-stickies'
import Item from './Item'
import Container from '../library/Container'


function MyFavs({ listUpdateStamp, user, onToggleFav }) {
    const [stickies, setStickies] = useState([])

    const loadlist = () => {

        try {
            retrieveFavStickies(sessionStorage.userId, (error, stickies) => {
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
        loadlist()


    }, [listUpdateStamp])

    const handleChangeColor = (stickyId, color) => {
        setStickies(stickies => {// para que se actualice cuando se cambie el color del sticky
            const index = stickies.findIndex(sticky => sticky.id === stickyId)
            const sticky = stickies[index]

            const stickyUpdated = { ...sticky }
            stickyUpdated.color = color

            const stickiesUpdated = [...stickies]

            stickiesUpdated[index] = stickyUpdated

            return stickiesUpdated
        })
    }

    const handleUpdateVisibility = (stickyId, visibility) => {
        setStickies(stickies => {// para que se actualice cuando se cambie el color del sticky
            const index = stickies.findIndex(sticky => sticky.id === stickyId)
            const sticky = stickies[index]

            const stickyUpdated = { ...sticky }
            stickyUpdated.visibility = visibility

            const stickiesUpdated = [...stickies]

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

    const handleLike = (userId, stickyId) => {
        setStickies(stickies => {
            const index = stickies.findIndex(sticky => sticky.id === stickyId)
            const sticky = stickies[index]
            const stickyUpdated = { ...sticky }

            stickyUpdated.likes = [...sticky.likes]

            const { likes } = stickyUpdated

            const indexOfUser = likes.indexOf(userId)

            if (indexOfUser < 0) {
                likes.push(userId)
            } else {
                likes.splice(indexOfUser, 1)
            }

            const stickiesUpdated = [...stickies]

            stickiesUpdated[index] = stickyUpdated

            return stickiesUpdated
        })
    }

    const handleToggleFav = (userId, stickyId) => {
        setStickies(stickies => { //eliminar el sticky de favoritos
            const index = stickies.findIndex(sticky => sticky.id === stickyId)

            //TODO que pasa si no lo encuentra

            const stickiesUpdated = [...stickies]

            stickiesUpdated.splice(index, 1)

            return stickiesUpdated
        })

       onToggleFav(userId, stickyId) //elimina el sticky del array de favoritos del usuario
    }

    return <Container TagName="ul" className="gap-4 py-10 ">
        {stickies.map(sticky => <Item key={sticky.id} element={sticky} onUpdateVisibility={handleUpdateVisibility}
            onDelete={handleRemoveFromList} onToggleLike={handleLike} onUpdateColor={handleChangeColor}
            onToggleFav={handleToggleFav} user={user} />
        )}
    </Container>
}

export default MyFavs