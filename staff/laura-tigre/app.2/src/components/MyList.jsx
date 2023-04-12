import{useState} from 'react'
import retrieveMyStickies from '../logic/retrieve-my-stickies'
import updateStickyText from '../logic/update-sticky-text'
import deleteSticky from '../logic/delete-sticky'
import updateStickyVisibility from '../logic/update-sticky-visibility'
import toggleLikeSticky from '../logic/toggle-like-sticky'
import { HeartIcon } from '@heroicons/react/24/solid'
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline'


function MyList(){
    const [updateStamp, setUpdateStamp] =useState(Date.now())

     let stickies
    
     try {
        stickies= retrieveMyStickies(sessionStorage.userId)
       
      } catch (error) {
        alert(error.message)
      }

    const handleEditText = event =>{
        try {
            updateStickyText(sessionStorage.userId, event.target.id, event.target.innerText)

        } catch (error) {
            alert(error.message)
            
        }
    }

    const handleDelete= event =>{
        try {
            deleteSticky(sessionStorage.userId,event.target.id)
            setUpdateStamp(Date.now())

        } catch (error) {
            alert(error.message)
        }
    }
    const handleUpdateVisibility= event =>{
        try {
            updateStickyVisibility(sessionStorage.userId,event.target.id, event.target.dataset.visibility=== 'private'? 'public': 'private')
            setUpdateStamp(Date.now)
        } catch (error) {
            alert(error.message)
        }
    }
    const handleLike = event =>{
        try {
          toggleLikeSticky(sessionStorage.userId, event.currentTarget.id)
          setUpdateStamp(Date.now)
        } catch (error) {
          alert(error.message)
          
        }
       }
    

    return<ul className="flex flex-col items-center h-screen gap-4 m-3">
         {stickies.map(sticky => 
        <li className="flex flex-col items-end bg-[#e5e7eb] w-[40ch] p-3 rounded-lg border-solid border-4 border-[#6b7280] " key={sticky.id}>
            <div className="flex">
        {sticky.visibility === 'public'?
        <button className="border-solid border-2 border-[black] w-6 h-6 text-center m-1" id={sticky.id} onClick={handleUpdateVisibility} data-visibility={sticky.visibility}>🌍</button> 
        :
        <button className="border-solid border-2 border-[black] w-6 h-6 text-center m-1" id={sticky.id} onClick={handleUpdateVisibility} data-visibility={sticky.visibility}>🛑</button>
         }
        <button className="border-solid border-2 border-[black] w-6 h-6 text-center m-1" id={sticky.id} onClick={handleDelete}>X</button> 
        </div>
        <p className="w-[35ch] text-left" id={sticky.id} contentEditable onKeyUp={handleEditText} suppressContentEditableWarning= {true}>{sticky.text}</p>
       
       
        <div className="flex">
              <button className="h-5 w-5" onClick={handleLike} id={sticky.id} title={sticky.likes.join('\n')}>
              {sticky.likes.includes(sessionStorage.userId)? <HeartIcon className="h-4 w-4 text-red-500"/>  : < HeartIconOutline className='h-4 w-4 text-black-500'/>}
              </button> <p>{sticky.likes.length}</p>
           
        </div>
        <strong>{sticky.user}</strong>
        </li>)}
       
    </ul>
  

}
export default MyList