import { useState, useEffect } from 'react'
import retrieveFavStickies from '../logic/retrieve-fav-stickies'
import Item from './Item'
import Container from '../library/Container'


function Favs({ listUpdateStamp, user, onToggleFav }) {
    const [stickies, setStickies] = useState([])

    const loadlist = () => {
        try {
            retrieveFavStickies(sessionStorage.token, (error, stickies) => {
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

    const handleToggleFav = (userId, stickyId)=>{
        setStickies(stickies => { //elimina el sticky de favoritos del usuario
            const index = stickies.findIndex(sticky => sticky.id === stickyId)

            const stickiesUpdated = [...stickies]

            stickiesUpdated.splice(index, 1)

            return stickiesUpdated
        })

        onToggleFav(userId, stickyId) // llamo para que se refresque el favorito del usuario, esta prop viene de home y le dice que quite el usuario de favoritos, para que lo quite del array de favoritos
    }

    return <Container TagName="ul" className="gap-4 py-10 ">
        {stickies.map(sticky => <Item key={sticky.id} element={sticky} onUpdateVisibility={handleUpdateVisibility} onDelete={handleRemoveFromList} onToggleLike={handleLike} onChangeColor={handleChangeColor} onToggleFav={handleToggleFav} user={user} />
        )}
    </Container>
}

export default Favs