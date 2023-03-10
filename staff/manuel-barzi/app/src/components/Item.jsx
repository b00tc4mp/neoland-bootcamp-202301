import updateStickyText from '../logic/update-sticky-text'
import deleteSticky from '../logic/delete-sticky'
import updateStickyVisibility from '../logic/update-sticky-visibility'
import toggleLikeSticky from '../logic/toggle-like-sticky'
import { HeartIcon, StarIcon } from '@heroicons/react/24/solid'
import { HeartIcon as HeartIconOutline, StarIcon as StarIconOutline } from '@heroicons/react/24/outline'
import updateStickyColor from '../logic/update-sticky-color'
import toggleFavSticky from '../logic/toggle-fav-sticky'
import extractUserId from '../utils/extractUserId'

function Item({ element, onUpdateVisibility, onToggleLike, onDelete, onUpdateColor, onToggleFav }) {
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

    const handleUpdateColor = event => {
        try {
            updateStickyColor(sessionStorage.token, element.id, event.target.value, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                onUpdateColor(element.id, event.target.value)
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

    return <li className={`${bgColor} w-[40ch] p-2`} key={element.id}>
        <div className="flex justify-between">
            <strong className="text-left">{element.user.name}</strong>
            <div>
                {element.user.id === userId && <>
                    <select className="bg-[transparent]" onChange={handleUpdateColor} defaultValue={element.color}>
                        <option value="red">red</option>
                        <option value="green">green</option>
                        <option value="blue">blue</option>
                        <option value="yellow">yellow</option>
                    </select>

                    <button className="w-5 h-5" onClick={handleUpdateVisibility}>{element.visibility === 'public' ? '-' : '+'}</button>
                </>}

                {element.user.id === userId && <button className="w-5 h-5" onClick={handleDelete}>x</button>}
            </div>
        </div>

        <p className="p-2" contentEditable={element.user.id === userId} onKeyUp={handleUpdateText} suppressContentEditableWarning={true}>{element.text}</p>

        <div className="flex justify-end">
            <button className="h-5 w-10 flex justify-center" onClick={handleToggleLike} title={element.likes.join('\n')}>{element.likes.includes(userId) ? <HeartIcon className="h-4 w-4 text-[black]" /> : <HeartIconOutline className="h-4 w-4 text-black-500" />} <span className="color-[white]">{element.likes.length}</span></button>

            <button className="h-5 w-5 flex justify-center" onClick={handleToggleFav}>{
                element.fav ?
                    <StarIcon className="h-4 w-4 text-[black]" />
                    :
                    <StarIconOutline className="h-4 w-4 text-black-500" />}</button>
        </div>
    </li>
}

export default Item