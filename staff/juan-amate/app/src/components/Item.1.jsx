import updateStickyText from '../logic/update-sticky-text'
import deleteSticky from '../logic/delete-sticky'
import updateStickyVisibility from '../logic/update-sticky-visibility'
import toggleLikeSticky from '../logic/toggle-like-sticky'
import { HeartIcon } from '@heroicons/react/24/solid'
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline'
import changeStickyColor from '../logic/change-sticky-color'

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

    const handleLike = event => {
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

    const handleChangeColor = event => {
        try {
            changeStickyColor(sessionStorage.userId, event.target.dataset.id, event.target.value, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                setStickies(prevStickies => {
                    const copyOfStickies = [...prevStickies]

                    const index = copyOfStickies.findIndex(sticky => sticky._id === event.target.dataset.id)

                    copyOfStickies[index].color = event.target.value


                    return copyOfStickies
                })
            })
        } catch (error) {
            alert(error.message)
        }
    }

    return <li key={element._id} className={`background-${element.color} border rounded-md bg-white p-3 m-3 w-[40ch] text-right`}>
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
            <button className="w-5 pb-0 cursor-pointer" onClick={handleLike} data-id={element._id}>{element.likes.includes(sessionStorage.userId) ? <HeartIcon /> : <HeartIconOutline />} </button>
            <p title={element.likes.join('\n')}>{element.likes.length}</p>
        </div>

        <strong className="text-gray-500 p-1 font-spline">{element.user}</strong>
    </li>
}

export default Item