import { useState, useEffect } from "react"
import retrievePublicStickies from "../logic/retrieve-public-stickies"
import Container from '../library/Container'
import Item from './Item'

function List({ listUpdateStamp, user, onToggleFav }) { //cuando recibe el user de home se pinta
    console.log('List ->render')

    const [stickies, setStickies] = useState([]) //la primera vez no pinta nada

    const loadList = () => { //pide los stickies para pintarlos
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
    useEffect(() => { //se pinta solo al cargar el componente si quiero que se refresque debo indicarlo dentro de los []
        loadList()
    }, [listUpdateStamp])


    const handleChangeColor = (stickyId, color) => {
        setStickies(stickies => {
            const index = stickies.findIndex(sticky => sticky.id === stickyId)

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
        {stickies.map(sticky => <Item key={sticky.id} element={sticky} onUpdateVisibility={handleRemoveFromList} onDelete={handleRemoveFromList} onToggleLike={handleLike} onChangeColor={handleChangeColor} onToggleFav={onToggleFav} user={user}/>)}
    </Container>
}

export default List