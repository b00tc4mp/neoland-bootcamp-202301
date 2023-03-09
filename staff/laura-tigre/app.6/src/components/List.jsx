import { useState, useEffect } from 'react'
import retrievePublicStickies from '../logic/retrive-public-stickies'
import Container from '../library/Container'
import Item from './Item'

function List({ listUpdateStamp, user, onToggleFav }) {


  const [stickies, setStickies] = useState([])


  const loadlist = () => {
    try {
      retrievePublicStickies(sessionStorage.userId, (error, stickies) => {

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
    setStickies(stickies => {
      const index = stickies.findIndex(sticky => sticky.id === stickyId)
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
  

  return <Container TagName="ul" className="gap-4 py-10 ">
    {stickies.map(sticky => <Item key={sticky.id} element={sticky} onUpdateVisibility={handleRemoveFromList} onDelete={handleRemoveFromList} onToggleLike={handleLike} onChangeColor={handleChangeColor} onToggleFav={onToggleFav} user={user} />
    )}
  </Container>




}

export default List

