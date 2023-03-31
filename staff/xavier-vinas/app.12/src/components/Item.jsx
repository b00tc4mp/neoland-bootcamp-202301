import updateStickyText from '../logic/update-sticky-text'
import deleteSticky from '../logic/delete-sticky'
import updateStickyVisibility from '../logic/update-sticky-visibility'
import toggleLikeSticky from '../logic/toggle-like-sticky'
import changeStickyColor from '../logic/change-sticky-color'
import toggleFavSticky from '../logic/toggle-fav-sticky'
import extractUserId from  '../utils/extractUserId'  

import { HeartIcon, StarIcon } from '@heroicons/react/24/solid'
import { HeartIcon as HeartIconOutline, StarIcon as StarIconOutline } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'



function Item({ element, onUpdateVisibility, onToggleLike, onDelete, onUpdateColor, onToggleFav, user }) {
    const userId = extractUserId(sessionStorage.token)

    const handleUpdateText = event => {
        try {
            updateStickyText(sessionStorage.token, event.target.dataset.id, event.target.innerText, error => {
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
            const newVisibility = event.target.dataset.visibility === 'public' ? 'private' : 'public'

            updateStickyVisibility(sessionStorage.token, event.target.dataset.id, newVisibility, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                onUpdateVisibility(event.target.dataset.id, newVisibility)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleToggleLike = event => {
        try {
            const stickyId = event.currentTarget.dataset.id

            toggleLikeSticky(sessionStorage.token, stickyId, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                onToggleLike(userId, stickyId)
            })
        } catch (error) {
            alert(error.message)
        }
    }


    const handleToggleFav = event => {

        const stickyId = event.currentTarget.dataset.id
        try {
            toggleFavSticky(sessionStorage.token, stickyId, error => {
                if (error) {
                    alert(error.message)

                    return
                }
                onToggleFav(userId, stickyId)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleDelete = event => {
        try {
            deleteSticky(sessionStorage.token, event.target.dataset.id, error => {
                if (error) {
                    alert(error.message)

                    return
                }
                onDelete(event.target.dataset.id)

            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleChangeColor = event => {
        try {
            changeStickyColor(sessionStorage.token, event.target.dataset.id, event.target.value, error => {
                if (error) {
                    alert(error.message)

                    return
                }
                onUpdateColor(event.target.dataset.id, event.target.value)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    let bgColor

    switch (element.color) {
        case 'yellow':
            bgColor = 'bg-[gold]'
            break
        case 'red':
            bgColor = 'bg-[tomato]'
            break
        case 'green':
            bgColor = 'bg-[yellowgreen]'
            break
        case 'blue':
            bgColor = 'bg-[dodgerblue]'
    }
    
    return <li className={`${bgColor} w-[60ch] p-10 border-double  border-2`} key={element.id}>
        <div className="text-right  flex justify-end">
            <button className="h-5 w-10 text-[#0a0802] m-1  flex " data-id={element.id} onClick={handleToggleFav}>{

                user.favs?.includes(element.id) ?
                    <StarIcon className="h-4 w-4 text-red-500" />
                    :
                    <StarIconOutline className="h-4 w-4 text-black-500" />}</button>

            {element.user.id === userId&& <>
                <select defaultValue={element.color} data-id={element.id} onChange={handleChangeColor}>
                    <option value="red">red</option>
                    <option value="green">green</option>
                    <option value="blue">blue</option>
                    <option value="yellow">yellow</option>
                </select>
                <button className="w-5 h-5  text-[#020200] m-1" data-id={element.id} data-visibility={element.visibility}
                    onClick={handleUpdateVisibility}>{element.visibility === 'public' ? '-' : '+'}</button>

            </>}
            {element.user.id === userId && <button className="w-5 h-5  text-[#030301] m-1"
                data-id={element.id} onClick={handleDelete}>x</button>}
        </div>

        <p className="p-2" data-id={element.id} contentEditable={element.user.id === userId} onKeyUp={handleUpdateText} suppressContentEditableWarning={true}>{element.text}</p>

        <div className="flex flex-col items-end">
            <button className="h-5 w-10 text-[#0a0802] m-1 flex justify-center" data-id={element.id}
                onClick={handleToggleLike} title={element.likes.join('\n')}
            >{element.likes.includes(userId) ? <HeartIcon className="h-4 w-4 text-red-500" /> : <HeartIconOutline className="h-4 w-4 text-black-500" />} <span className="color-[white]">{element.likes.length}</span></button>


            <Link to={`/users/${element.user.id}`}>
                <strong>{element.user.name}</strong>
            </Link>
        </div>
    </li>

}

export default Item
