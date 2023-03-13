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
                onUpdateVisibility(event.target.dataset.id, newVisibility )
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleLike = event => {
        const stickyId = event.currentTarget.dataset.id
        try {
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

    const handleDeleteSticky = event => {
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
        case 'red':
            bgColor = 'bg-red-300'
            break
        case 'yellow':
            bgColor = 'bg-yellow-300'
            break
        case 'green':
            bgColor = 'bg-green-300'
            break
        case 'purple':
            bgColor = 'bg-purple-300'
    }


    return <li className={`${bgColor} p-4 w-[50ch] border-2 flex flex-col items-end rounded-lg border-solid`} key={element._id}>
        <div>
            {element.user === sessionStorage.userId && <>

                <select defaultValue={element.color} data-id={element._id} name='color2' onChange={handleChangeColor}>
                    <option value="red">Red</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="purple">Purple</option>
                </select>


                <button className={"text-white uppercase rounded-md border-white py-1 px-1 text-sm items-center" + (element.visibility === 'public' ? ' bg-green-500' : ' bg-red-500')} data-id={element._id} data-visibility={element.visibility} onClick={handleUpdateVisibility}>{element.visibility}</button></>}

            {element.user === sessionStorage.userId &&
                <button className="border-2 border-[black] w-7 h-7 text-center m-1 text-black uppercase rounded-md text-sm" data-id={element._id} onClick={handleDeleteSticky}>X</button>}
        </div>

        <p className="w-[45ch] text-left" data-id={element._id} contentEditable={element.user === sessionStorage.userId} onKeyUp={handleUpdateText} suppressContentEditableWarning={true}>{element.text}</p>

        <div className="flex" >
            <button className="h-5 w-5" onClick={handleLike} data-id={element._id} title={element.likes.join('\n')} >
                {element.likes.includes(sessionStorage.userId) ? <HeartIcon className="h-4 w-4 text-red-500" /> : < HeartIconOutline className='h-4 w-4 text-black-500' />}</button>
            <p>{element.likes.length}</p>
        </div>
        <strong className="text-xs">{element.user}</strong>
    </li>
}

export default Item
