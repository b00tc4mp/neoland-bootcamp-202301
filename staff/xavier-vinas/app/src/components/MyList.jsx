import { useState, useEffect } from 'react'
import retrieveMyStickies from '../logic/retrieve-my-stickies'
import updateStickyText from '../logic/update-sticky-text'
import deleteSticky from '../logic/delete-sticky'
import updateStickyVisibility from '../logic/update-sticky-visibility'
import toggleLikeSticky from '../logic/toggle-like-sticky'
import { HeartIcon } from '@heroicons/react/24/solid'
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline'

function MyList() {
    console.log('MyList -> render')

    const [updateStamp, setUpdateStamp] = useState(Date.now())
    const [stickies, setStickies] = useState([])

    useEffect(() => {
        try {
            retrieveMyStickies(sessionStorage.userId, (error, stickies) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setStickies(stickies)
            })
        } catch (error) {
            alert(error.message)
        }
    }, [])

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
            setUpdateStamp(Date.now())
        } catch (error) {
            alert(error.message)
        }
    }

    const handleUpdateVisibility = event => {
        try {
            updateStickyVisibility(sessionStorage.userId, event.target.id, event.target.dataset.visibility === 'public' ? 'private' : 'public')
            setUpdateStamp(Date.now())
        } catch (error) {
            alert(error.message)
        }
    }

    const handleToggleLike = event => {
        try {
            toggleLikeSticky(sessionStorage.userId, event.currentTarget.id)
            setUpdateStamp(Date.now())
        } catch (error) {
            alert(error.message)
        }
    }

    return <ul className="flex flex-col items-center">
        {stickies.map(sticky => <li className="bg-[#d1d0cc] m-10 w-[40ch] rounded-full p-10 border-double" key={sticky._id}>
            <div className="text-right">
                <button className="w-5 h-5 text-[#d3d3d1] m-1" id={sticky.id} data-visibility={sticky.visibility} onClick={handleUpdateVisibility}>{sticky.visibility === 'public' ? '-' : '+'}</button>

                <button className="w-5 h-5 text-[#cacac9] m-1" id={sticky.id} onClick={handleDelete}>x</button>
            </div>

            <p className="p-2" id={sticky.id} contentEditable onKeyUp={handleUpdateText} suppressContentEditableWarning={true}>{sticky.text}</p>

            <div className="flex flex-col items-end">
                <button className="h-5 w-10 text-[#c5c5c2] m-1 flex justify-center" id={sticky.id} onClick={handleToggleLike} title={sticky.likes.join('\n')}>{sticky.likes.includes(sessionStorage.userId) ? <HeartIcon className="h-4 w-4 text-red-500" /> : <HeartIconOutline className="h-4 w-4 text-black-500" />} <span className="color-[white]">{sticky.likes.length}</span></button>

                <strong>{sticky.user}</strong>
            </div>
        </li>)}
    </ul>
}

export default MyList