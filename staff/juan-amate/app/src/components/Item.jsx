import updateStickyText from '../logic/update-sticky-text'
import deleteSticky from '../logic/delete-sticky'
import updateStickyVisibility from '../logic/update-sticky-visibility'
import toggleLikeSticky from '../logic/toggle-like-sticky'
import changeStickyColor from '../logic/change-sticky-color'
import toggleFavSticky from '../logic/toggle-fav-sticky'
import extractUserId from '../utils/extractUserId'

import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline'
import { HeartIcon } from '@heroicons/react/24/solid'
import { EyeIcon } from '@heroicons/react/24/outline'
import { EyeSlashIcon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { BookmarkIcon } from '@heroicons/react/24/solid'
import { BookmarkIcon as BookmarkIconOutline } from '@heroicons/react/24/outline'
import Context from '../Context'
import { useContext } from 'react'


function Item({ element, onUpdateVisibility, onToggleLike, onDelete, onChangeColor, onToggleFav }) {
    console.log('Item -> render')

    const { alert } = useContext(Context)

    const userId = extractUserId(sessionStorage.token)

    const handleUpdateText = event => {
        try {
            updateStickyText(sessionStorage.token, element.id, event.target.innerText, error => {
                if (error) {
                    alert(error.message)

                    return
                }
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleUpdateVisibility = event => {
        try {
            const newVisibility = element.visibility === 'public' ? 'private' : 'public'

            updateStickyVisibility(sessionStorage.token, element.id, newVisibility, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                onUpdateVisibility(element.id, newVisibility)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleToggleLike = event => {
        try {
            toggleLikeSticky(sessionStorage.token, element.id, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                onToggleLike(userId, element.id)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleDelete = event => {
        try {
            deleteSticky(sessionStorage.token, element.id, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                onDelete(element.id)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleChangeColor = event => {
        try {
            changeStickyColor(sessionStorage.token, element.id, event.target.value, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                onChangeColor(element.id, event.target.value)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleToggleFav = event => {
        try {
            toggleFavSticky(sessionStorage.token, element.id, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                onToggleFav(element.id)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    let bgColor

    switch (element.color) {
        case 'yellow':
            bgColor = 'bg-amber-200'
            break
        case 'red':
            bgColor = 'bg-red-200'
            break
        case 'green':
            bgColor = 'bg-lime-200'
            break
        case 'blue':
            bgColor = 'bg-sky-200'
    }

    return (
        <li key={element.id} className={`${bgColor} border rounded-md p-3 m-3 w-[40ch] text-right`}>
            <div className='flex justify-between'>
                <strong className="text-gray-500 p-1 font-spline italic">{element.user.name}</strong>
                <div>
                    {element.user.id === userId && <>
                        <select className='h-6 mx-2 border border-black' defaultValue={element.color} onChange={element.color}>
                            <option value='yellow'>yellow</option>
                            <option value='red'>red</option>
                            <option value='green'>green</option>
                            <option value='blue'>blue</option>
                        </select>

                        <button className='h-6 w-6 text-xl cursor-pointer' onClick={handleUpdateVisibility}>{element.visibility === 'public' ? '🟢' : '🔴'}
                        </button>
                    </>}

                    {element.user.id === userId && <button className="h-6 w-6 text-xl cursor-pointer" data-id={element.id} onClick={handleDelete}>🗑️</ button>}
                </div>
            </div>

            <p className="text-xl pt-5 text-left" contentEditable={element.user.id === userId} onKeyUp={handleUpdateText} suppressContentEditableWarning={true}>{element.text}</p>


            <div className={'flex justify-end gap-1'}>
                <button className="w-6 h-6 cursor-pointer" onClick={handleToggleLike} title={element.likes.join('\n')}>{element.likes.includes(userId) ? <HeartIcon className="text-red-500" /> : <HeartIconOutline className="text-black" />} <span>{element.likes.length}</span></button>

                <button className='h-6 w-6 cursor-pointer' onClick={handleToggleFav}>
                    {element.favs ? <BookmarkIcon className='text-green-500' /> : <BookmarkIconOutline />}</button>
            </div>
        </li>
    )
}

export default Item

