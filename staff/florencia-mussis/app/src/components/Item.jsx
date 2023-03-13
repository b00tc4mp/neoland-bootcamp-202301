import updateStickyText from '../logic/update-sticky-text'
import deleteSticky from '../logic/delete-sticky'
import updateStickyVisibility from '../logic/update-sticky-visibility'
import toggleLikeSticky from '../logic/toggle-like-sticky'
import { HeartIcon, StarIcon } from '@heroicons/react/24/solid'
import { HeartIcon as HeartIconOutline, StarIcon as StarIconOutline } from '@heroicons/react/24/outline'
import changeStickyColor from '../logic/change-sticky-color'
import toggleFavsSticky from '../logic/toggle-favs-sticky'
import extractUserId from '../utils/extractUserId'
import { Link } from 'react-router-dom'
import Context from '../Context'
import { useContext } from 'react'


function Item({ element, onUpdateVisibility, onToggleLike, onDelete, onChangeColor, onToggleFav }) { //usa el user para los favoritos

    const { alert } = useContext(Context)

    const userId = extractUserId(sessionStorage.token) //a extractUserId funcion le pasamos el token y nos devuelve un userId

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

    const handleLike = event => {
        try {
            toggleLikeSticky(sessionStorage.token, element.id, error => {
                if (error) {
                    alert(error.message)

                    return
                }
                onToggleLike(userId, element.id) //aqui ponemos el userId pq no llega a la api, lo usamos en la app, solo para saber si ya le ha dado like o no
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleDeleteSticky = event => {
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

    const handleFav = event => { 
        try {
            toggleFavsSticky(sessionStorage.token, element.id, error => { // llama a la api y ponemos o quitamos el sticky en bd
                if (error) {
                    alert(error.message)

                    return
                }
                onToggleFav(element.id) //cuando responde la api, usamos el callback que viene de home, list. Espero a que la api este bien, lo ponga o lo saque y con ontogglefav autorizo a home para que lo pongo o lo saque visualmente
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
            <Link to={`/users/${element.user.id}`}>
            <strong className="text-xs text-left">{element.user.name}</strong></Link>
            <div>
                {element.user.id === userId && <>
                    <select className="bg-[transparent]" defaultValue={element.color} name='color2' onChange={handleChangeColor}>
                        <option value="red">Red</option>
                        <option value="yellow">Yellow</option>
                        <option value="green">Green</option>
                        <option value="purple">Purple</option>
                    </select>

                    <button className={"text-white uppercase rounded-md border-white py-1 px-1 text-xs items-center" + (element.visibility === 'public' ? ' bg-green-500' : ' bg-red-500')} onClick={handleUpdateVisibility}>{element.visibility}</button>
                </>}

                {element.user.id === userId &&
                    <button className="border-2 border-[black] w-6  text-center m-1 text-black uppercase rounded-md text-xs" onClick={handleDeleteSticky}>X</button>}
            </div>
        </div>

        <p className="w-[45ch] p-3 text-left" contentEditable={element.user.id === userId} onKeyUp={handleUpdateText} suppressContentEditableWarning={true}>{element.text}</p>

        <div className="flex justify-end" >
            <button className="h-5 w-5 flex justify-center" onClick={handleLike} title={element.likes.join('\n')} >
                {element.likes.includes(userId) ? <HeartIcon className="h-4 w-4 text-red-500" /> : < HeartIconOutline className='h-4 w-4 text-black-500' />}</button>
            <p>{element.likes.length}</p>


            <button className="h-5 w-5 flex justify-center" onClick={handleFav}>
                {element.fav ?
                    <StarIcon className="h-4 w-4 text-red-500" />
                    :
                    <StarIconOutline className="h-4 w-4 text-black-500" />}
            </button>

        </div>
    </li>
}

export default Item
