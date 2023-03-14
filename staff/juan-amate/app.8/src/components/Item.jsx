import updateStickyText from '../logic/update-sticky-text'
import deleteSticky from '../logic/delete-sticky'
import updateStickyVisibility from '../logic/update-sticky-visibility'
import toggleLikeSticky from '../logic/toggle-like-sticky'
import { HeartIcon } from '@heroicons/react/24/solid'
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline'
import changeStickyColor from '../logic/change-sticky-color'

function Item({ element, onUpdateVisibility, onToggleLike, onDelete, onChangeColor }) {
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

    const handleChangeColor = event => {
        try {
            changeStickyColor(sessionStorage.userId, event.target.dataset.id, event.target.value, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                onChangeColor(event.target.dataset.id, event.target.value)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    let bgColor

    switch (element.color) {
        case 'yellow':
            bgColor = 'bg-yellow-300'
            break
        case 'red':
            bgColor = 'bg-red-300'
            break
        case 'green':
            bgColor = 'bg-green-300'
            break
        case 'blue':
            bgColor = 'bg-sky-300'
            break
    }

    return <li key={element._id} className={`${bgColor} border rounded-md p-3 m-3 w-[40ch] text-right`}>
        <div className='text-right'>
            {element.user === sessionStorage.userId && <>
                <select defaultValue={element.color} data-id={element._id} name='color' onChange={handleChangeColor}>
                    <option value='yellow'>yellow</option>
                    <option value='red'>red</option>
                    <option value='green'>green</option>
                    <option value='blue'>blue</option>
                </select>

                <button className="bg-blue-600 border border-gray-400 m-0.5 rounded-md h-8 w-8" data-id={element._id} data-visibility={element.visibility} onClick={handleUpdateVisibility}>🚦</button>
            </>}

            {element.user === sessionStorage.userId && <button className="bg-blue-600 border border-gray-400 m-0.5 rounded-md h-8 w-8" data-id={element._id} onClick={handleDelete}>❌</button>}
        </div>

        <p className="text-xl pt-5 text-left" data-id={element._id} contentEditable={element.user === sessionStorage.userId} onKeyUp={handleUpdateText} suppressContentEditableWarning={true}>{element.text}</p>

        <div className={'flex justify-end gap-1'}>
            <button className="w-5 pb-0 cursor-pointer" onClick={handleToggleLike} data-id={element._id}>{element.likes.includes(sessionStorage.userId) ? <HeartIcon /> : <HeartIconOutline />} </button>
            <p title={element.likes.join('\n')}>{element.likes.length}</p>
        </div>

        <strong className="text-gray-500 p-1 font-spline">{element.user}</strong>
    </li>
}

export default Item