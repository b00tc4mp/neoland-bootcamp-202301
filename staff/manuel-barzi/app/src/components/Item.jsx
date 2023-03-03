import updateStickyText from '../logic/update-sticky-text'
import deleteSticky from '../logic/delete-sticky'
import updateStickyVisibility from '../logic/update-sticky-visibility'
import toggleLikeSticky from '../logic/toggle-like-sticky'
import { HeartIcon } from '@heroicons/react/24/solid'
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline'
import updateStickyColor from '../logic/update-sticky-color'

function Item({ element, onUpdateVisibility, onToggleLike, onDelete, onUpdateColor }) {
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
            updateStickyVisibility(sessionStorage.userId, event.target.dataset.id, event.target.dataset.visibility === 'public' ? 'private' : 'public', error => {
                if (error) {
                    alert(error.message)

                    return
                }

                onUpdateVisibility()
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleToggleLike = event => {
        try {
            toggleLikeSticky(sessionStorage.userId, event.currentTarget.dataset.id, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                onToggleLike()
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

                onDelete()
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

                onUpdateColor()
            })
        } catch (error) {
            alert(error.message)
        }
    }

    return <li className="bg-[gold] w-[40ch]" key={element._id}>
        <div className="text-right">
            {element.user === sessionStorage.userId && <>
                <select data-id={element._id} onChange={handleUpdateColor}>
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

            <strong>{element.user}</strong>
        </div>
    </li>
}

export default Item