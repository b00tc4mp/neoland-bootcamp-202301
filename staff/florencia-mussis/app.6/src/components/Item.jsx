import updateStickyText from '../logic/update-sticky-text'
import deleteSticky from '../logic/delete-sticky'
import updateStickyVisibility from '../logic/update-sticky-visibility'
import toggleLikeSticky from '../logic/toggle-like-sticky'
import { HeartIcon, StarIcon } from '@heroicons/react/24/solid'
import { HeartIcon as HeartIconOutline, StarIcon as StarIconOutline } from '@heroicons/react/24/outline'
import changeStickyColor from '../logic/change-sticky-color'
import toggleFavsSticky from '../logic/toggle-favs-sticky'


function Item({ element, onUpdateVisibility, onToggleLike, onDelete, onChangeColor, onToggleFav, user }) { //usa el user para los favoritos

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

    const handleFav = event => { // llama a la api, y ponemos o quitamos el sticky en bd
        try {
            const stickyId = event.currentTarget.dataset.id
            toggleFavsSticky(sessionStorage.userId, stickyId, error => {
                if (error) {
                    alert(error.message)

                    return
                }
                onToggleFav(sessionStorage.userId, stickyId) //cuando responde la api, usamos el callback que viene de home, list. Espero a que la api este bien, lo ponga o lo saque y con ontogglefav autorizo a home para que lo pongo o lo saque visualmente
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


    return <li className={`${bgColor} p-4 w-[50ch] border-2 rounded-lg border-solid`} key={element.id}>

        <div className="flex justify-between">
            <strong className="text-xs text-left">{element.user.name}</strong>
            <div>
                {element.user.id === sessionStorage.userId && <>
                    <select className="bg-[transparent]" defaultValue={element.color} data-id={element.id} name='color2' onChange={handleChangeColor}>
                        <option value="red">Red</option>
                        <option value="yellow">Yellow</option>
                        <option value="green">Green</option>
                        <option value="purple">Purple</option>
                    </select>

                    <button className={"text-white uppercase rounded-md border-white py-1 px-1 text-xs items-center" + (element.visibility === 'public' ? ' bg-green-500' : ' bg-red-500')} data-id={element.id} data-visibility={element.visibility} onClick={handleUpdateVisibility}>{element.visibility}</button>
                </>}

                {element.user.id === sessionStorage.userId &&
                    <button className="border-2 border-[black] w-6  text-center m-1 text-black uppercase rounded-md text-xs" data-id={element.id} onClick={handleDeleteSticky}>X</button>}
            </div>
        </div>

        <p className="w-[45ch] p-3 text-left" data-id={element.id} contentEditable={element.user.id === sessionStorage.userId} onKeyUp={handleUpdateText} suppressContentEditableWarning={true}>{element.text}</p>

        <div className="flex justify-end" >
            <button className="h-5 w-5 flex justify-center" onClick={handleLike} data-id={element.id} title={element.likes.join('\n')} >
                {element.likes.includes(sessionStorage.userId) ? <HeartIcon className="h-4 w-4 text-red-500" /> : < HeartIconOutline className='h-4 w-4 text-black-500' />}</button>
            <p>{element.likes.length}</p>


            <button className="h-5 w-5 flex justify-center" onClick={handleFav} data-id={element.id}>
                {user.favs?.includes(element.id) ?
                    <StarIcon className="h-4 w-4 text-red-500" />
                    :
                    <StarIconOutline className="h-4 w-4 text-black-500" />}
            </button>

        </div>
    </li>
}

export default Item
