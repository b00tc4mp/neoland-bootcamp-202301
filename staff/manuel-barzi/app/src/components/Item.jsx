import updateStickyText from '../logic/update-sticky-text'
import deleteSticky from '../logic/delete-sticky'
import updateStickyVisibility from '../logic/update-sticky-visibility'
import toggleLikeSticky from '../logic/toggle-like-sticky'
import { HeartIcon, StarIcon } from '@heroicons/react/24/solid'
import { HeartIcon as HeartIconOutline, StarIcon as StarIconOutline } from '@heroicons/react/24/outline'
import updateStickyColor from '../logic/update-sticky-color'
import toggleFavSticky from '../logic/toggle-fav-sticky'

function Item({ element, onUpdateVisibility, onToggleLike, onDelete, onUpdateColor, onToggleFav, user }) {
    const handleUpdateText = event => {
        try {
            updateStickyText(sessionStorage.userId, event.target.dataset.id, event.target.innerText, error => {
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

            updateStickyVisibility(sessionStorage.userId, event.target.dataset.id, newVisibility, error => {
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

            toggleLikeSticky(sessionStorage.userId, stickyId, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                onToggleLike(sessionStorage.userId, stickyId)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleToggleFav = event => {
        try {
            const stickyId = event.currentTarget.dataset.id

            toggleFavSticky(sessionStorage.userId, stickyId, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                onToggleFav(sessionStorage.userId, stickyId)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleDelete = event => {
        try {
            deleteSticky(sessionStorage.userId, event.target.dataset.id, error => {
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

    const handleUpdateColor = event => {
        try {
            updateStickyColor(sessionStorage.userId, event.target.dataset.id, event.target.value, error => {
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

    return <li className={`${bgColor} w-[40ch]`} key={element._id}>
        <div className="text-right">
            {element.user === sessionStorage.userId && <>
                <select data-id={element._id} onChange={handleUpdateColor} defaultValue={element.color}>
                    <option value="red">red</option>
                    <option value="green">green</option>
                    <option value="blue">blue</option>
                    <option value="yellow">yellow</option>
                </select>

                <button className="w-5 h-5 bg-black text-[gold] m-1" data-id={element._id} data-visibility={element.visibility} onClick={handleUpdateVisibility}>{element.visibility === 'public' ? '-' : '+'}</button>
            </>}

            {element.user === sessionStorage.userId && <button className="w-5 h-5 bg-black text-[gold] m-1" data-id={element._id} onClick={handleDelete}>x</button>}
        </div>

        <p className="p-2" data-id={element._id} contentEditable={element.user === sessionStorage.userId} onKeyUp={handleUpdateText} suppressContentEditableWarning={true}>{element.text}</p>

        <div className="flex flex-col items-end">
            <button className="h-5 w-10 bg-black text-[gold] m-1 flex justify-center" data-id={element._id} onClick={handleToggleLike} title={element.likes.join('\n')}>{element.likes.includes(sessionStorage.userId) ? <HeartIcon className="h-4 w-4 text-red-500" /> : <HeartIconOutline className="h-4 w-4 text-black-500" />} <span className="color-[white]">{element.likes.length}</span></button>

            <button className="h-5 w-10 bg-black text-[gold] m-1 flex justify-center" data-id={element._id} onClick={handleToggleFav}>{
                // user.favs && user.favs.includes(element._id) ?
                user.favs?.includes(element._id) ?
                    <StarIcon className="h-4 w-4 text-red-500" />
                    :
                    <StarIconOutline className="h-4 w-4 text-black-500" />}</button>
            <strong>{element.user}</strong>
        </div>
    </li>
}

export default Item