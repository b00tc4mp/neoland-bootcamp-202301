import { useState } from 'react'
import retrieveMyStickies from '../logic/retrieve-my-stickies'
import updateStickyText from '../logic/update-sticky-text'
import deleteSticky from '../logic/delete-sticky'
import updateStickyVisibility from '../logic/update-sticky-visibility'
import toggleLikeSticky from '../logic/toggle-like-sticky'
import { HeartIcon } from '@heroicons/react/24/solid'
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline'

function MyList() {
    const [listUpdateStamp, setListUpdateStamp] = useState(Date.now())

    let stickies

    try {
        stickies = retrieveMyStickies(sessionStorage.userId)
    } catch (error) {
        alert(error.message)
    }

    const handleUpdateText = event => {
        try {
            updateStickyText(sessionStorage.userId, event.target.id, event.target.innerText)
        } catch (error) {
            alert(error.message)
        }
    }

    const handleDelete = event => {
        try {
            deleteSticky(sessionStorage.userId, event.target.id)

            setListUpdateStamp(Date.now())
        } catch (error) {
            alert(error.message)
        }
    }

    const handleUpdateVisibility = event => {
        try {
            updateStickyVisibility(sessionStorage.userId, event.target.id, event.target.dataset.visibility === 'public' ? 'private' : 'public')

            setListUpdateStamp(Date.now())
        } catch (error) {
            alert(error.message)
        }
    }

    const handleLike = event => {
        try {
            toggleLikeSticky(sessionStorage.userId, event.currentTarget.id)

            setListUpdateStamp(Date.now())
        } catch (error) {
            alert(error.message)
        }
    }

    return <ul className="flex flex-col items-center">
        {stickies.map(sticky => <li key={sticky.id} className='border rounded-md bg-white p-3 m-3 w-[40ch] text-right'>
            <div className='flex justify-end align-center'>
                {sticky.visibility === 'private' ? <p>⛔️ private</p> : <p>👨‍👩‍👧‍👦 public</p>}

                <button className="bg-blue-600 border border-gray-400 m-0.5 rounded-md h-8 w-8" id={sticky.id} data-visibility={sticky.visibility} onClick={handleUpdateVisibility}>🚦</button>

                <button className="bg-blue-600 border border-gray-400 m-0.5 rounded-md h-8 w-8" id={sticky.id} onClick={handleDelete}>❌</button>
            </div>

            <p className="text-xl pt-5 text-left" id={sticky.id} contentEditable onKeyUp={handleUpdateText} suppressContentEditableWarning={true}>{sticky.text}</p>
            <div className="flex justify-end gap-1">
                <button className="w-5 pb-0 cursor-pointer" onClick={handleLike} id={sticky.id}>{sticky.likes.includes(sessionStorage.userId) ? <HeartIcon /> : <HeartIconOutline />} </button>
                <p title={sticky.likes.join('\n')}>{sticky.likes.length}</p>
            </div>
            <strong className="text-gray-500 p-1">{sticky.user}</strong>
        </li>)}
    </ul>
}

export default MyList