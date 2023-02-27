import { useState, useEffect } from 'react'
import retrievePublicStickies from '../logic/retrive-public-stickies'
import updateStickyText from '../logic/update-sticky-text'
import deleteSticky from '../logic/delete-sticky'
import updateStickyVisibility from '../logic/update-sticky-visibility'
import toggleLikeSticky from '../logic/toggle-like-sticky'
import { HeartIcon } from '@heroicons/react/24/solid'
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline'


function List({ listUpdateStamp }) {
 

  const [stickies, setStickies] = useState([])

  const loadlist = ()=>{
    try {
      retrievePublicStickies((error, stickies) => {

        if (error) {
          alert(error.message)

          return
        }

        setStickies(stickies.reverse())
      })
      console.log(stickies)
    } catch (error) {
      alert(error.message)
    }
  }

  useEffect(() => {
   loadlist()
  }, [listUpdateStamp])


  const handleEditText = (event) => {


    try {
      updateStickyText(sessionStorage.userId, event.target.id, event.target.innerText, error => {
        if (error) {
          alert(error.message)
          return
        }

      })
    } catch (error) {
      alert(error.message)
    }
  }
  const handleDelete = event => {
    try {
      deleteSticky(sessionStorage.userId, event.target.id, error=>{
        if(error){
          alert(error.message)
          return
        }
        
       loadlist()
      })
    } catch (error) {
      alert(error.message)
    }
  }

  const handleUpdateVisibility = event => {

    try {
      updateStickyVisibility(sessionStorage.userId, event.target.id, event.target.dataset.visibility === 'public' ? 'private' : 'public', error => {
        if (error) {
          alert(error.message)
          return
        }
       loadlist()

      })
    } catch (error) {
      alert(error.message)
    }
  }
  const handleLike = event => {
    try {
      toggleLikeSticky(sessionStorage.userId, event.currentTarget.id, error=>{

        if(error){
          alert(error.message)
          return
        }
      loadlist()
      })
    } catch (error) {
      alert(error.message)

    }
  }

  return <ul className="flex flex-col items-center h-screen gap-4 m-3">
    {stickies.map(sticky =>
      <li className="flex flex-col items-end bg-[#e5e7eb] w-[40ch] p-3 rounded-lg border-solid border-2 border-[#6b7280] " key={sticky._id}>
        <div className="flex ">
          {sticky.user === sessionStorage.userId &&
            <button className="border-solid border-2 border-[#6b7280] w-6 h-6 text-center m-1" id={sticky._id} onClick={handleUpdateVisibility} data-visibility={sticky.visibility}>🌍</button>}
          {sticky.user === sessionStorage.userId &&
            <button className="border-solid border-2 border-[#6b7280] w-6 h-6 text-center m-1" id={sticky._id} onClick={handleDelete}>X</button>}
        </div>
        <p className="w-[35ch] text-left" id={sticky._id} contentEditable={sticky.user === sessionStorage.userId} onKeyUp={handleEditText} suppressContentEditableWarning={true}>
          {sticky.text}
        </p>

        <div className="flex" >
          <button className="h-5 w-5" onClick={handleLike} id={sticky._id} title={sticky.likes.join('\n')} >
            {sticky.likes.includes(sessionStorage.userId) ? <HeartIcon className="h-5 w-5 text-red-500" /> : < HeartIconOutline className='h-5 w-5 text-black-500' />}</button>
          <p>{sticky.likes.length}</p>

        </div>
        <strong>{sticky.user}</strong>
      </li>)}
  </ul>




}

export default List