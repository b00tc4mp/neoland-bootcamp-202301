import { useState, useEffect } from 'react'
import retrieveMyStickies from '../logic/retrieve-my-stickies'
import Item from './Item'
import Container from '../library/Container'


function MyList({ listUpdateStamp, userFromHome }) {


  const [stickies, setStickies] = useState([])
  const [user, setUser] = useState(userFromHome)


  const loadlist = () => {

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
    loadlist()
    setUser(userFromHome)

  }, [listUpdateStamp, userFromHome])

  const handleChangeColor = (stickyId, color) => {
    setStickies(stickies => {// para que se actualice cuando se cambie el color del sticky
      const index = stickies.findIndex(sticky => sticky._id === stickyId)
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
      const index = stickies.findIndex(sticky => sticky._id === stickyId)
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

  const handleFavs = (userId, stickyId) => {
    setUser(user => {
    
      const copyOfUser={...user}
      const favs = [...copyOfUser.favs]
      const indexOfSticky = favs.indexOf(stickyId)
     
     if (indexOfSticky < 0) {
        favs.push(stickyId)
      } else {
        favs.splice(indexOfSticky, 1)
      }

      copyOfUser.favs = favs

      return copyOfUser

    })

  }
  return <Container TagName="ul" className="gap-4 py-10 ">
    {stickies.map(sticky => <Item key={sticky._id} element={sticky} onUpdateVisibility={handleUpdateVisibility} onDelete={handleRemoveFromList} onToggleLike={handleLike} onChangeColor={handleChangeColor} onToggleFavs={handleFavs} userFromHome={user} />
    )}
  </Container>


}
export default MyList