import {  useState, useEffect } from "react"
import retrievePublicStickies from "../logic/retrieve-public-stickies"
import updateStickyText from "../logic/update-sticky-text"
import deleteSticky from "../logic/delete-sticky"
import updateStickyVisibility from "../logic/update-sticky-visibility"
import toggleLikeSticky from "../logic/toggle-like-sticky"
import { HeartIcon } from '@heroicons/react/24/solid'
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline'



function List({ listUpdateStamp }) {
    console.log('List ->render')

    const [updateStamp, setUpdateStamp] = useState(Date.now())
    const [stickies, setStickies] = useState([])

    useEffect(() => {
        try {
            retrievePublicStickies((error, stickies) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setStickies(stickies.reverse())
            })
        } catch (error) {
            alert(error.message)
        }
    }, [listUpdateStamp, updateStamp])


    const handleUpdateText = (event) => {
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

    const handleDeleteSticky = (event) => {
        try {
            deleteSticky(sessionStorage.userId, event.target.id, error => {
                if (error) {
                    alert(error.message)

                    return
                }
                setUpdateStamp(Date.now())
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleUpdateVisibility = (event) => {
        try {
            updateStickyVisibility(sessionStorage.userId, event.target.id, event.target.dataset.visibility === 'public' ? 'private' : 'public', error => {
                if (error) {
                    alert(error.message)

                    return
                }
                setUpdateStamp(Date.now())
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleLike = (event) => {
        try {
            toggleLikeSticky(sessionStorage.userId, event.currentTarget.id, error => {
                if (error) {
                    alert(error.message)

                    return
                }
                setUpdateStamp(Date.now())
            })
        } catch (error) {
            alert(error.message)
        }
    }

    return <ul className="flex flex-col items-center h-screen pt-20 gap-4 m-3">
        {stickies.map(sticky => <li className="p-4 w-[50ch] border-2 flex flex-col items-end rounded-lg border-solid" key={sticky._id}>
            <div>
                {sticky.user === sessionStorage.userId &&
                    <button className= "border-solid border-2 border-[black] w-16 h-6 text-center" id={sticky.visibility === 'public' ? 'classPublic' : 'classPrivate'} id={sticky._id} data-visibility={sticky.visibility} onClick={handleUpdateVisibility}>{sticky.visibility}</button>}

                {sticky.user === sessionStorage.userId &&
                    <button className="border-solid border-2 border-[black] w-6 h-6 text-center m-1" id={sticky._id} onClick={handleDeleteSticky}>X</button>}
            </div>

            <p className="w-[45ch] text-left" id={sticky._id} contentEditable={sticky.user === sessionStorage.userId} onKeyUp={handleUpdateText} suppressContentEditableWarning={true}>{sticky.text}</p>

            <div className="flex" >
                <button className="h-5 w-5" onClick={handleLike} id={sticky._id} title={sticky.likes.join('\n')} >
                    {sticky.likes.includes(sessionStorage.userId) ? <HeartIcon className="h-4 w-4 text-red-500" /> : < HeartIconOutline className='h-4 w-4 text-black-500' />}</button>
                <p>{sticky.likes.length}</p>
            </div>
            <strong className="text-xs">{sticky.user}</strong>
        </li>)}
    </ul>
}

export default List