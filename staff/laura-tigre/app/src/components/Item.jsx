import updateStickyText from '../logic/update-sticky-text'
import deleteSticky from '../logic/delete-sticky'
import updateStickyVisibility from '../logic/update-sticky-visibility'
import changeStickyColor from '../logic/change-sticky-color'
import toggleLikeSticky from '../logic/toggle-like-sticky'
import toggleFavSticky from '../logic/toggle-fav-sticky'
import { HeartIcon, StarIcon } from '@heroicons/react/24/solid'
import { HeartIcon as HeartIconOutline, StarIcon as StarIconOutline } from '@heroicons/react/24/outline'
import extractUserId from '../utils/extractUserId'
import { Link} from 'react-router-dom'
import Context from '../Context'
import { useContext } from 'react'

function Item({ element, onUpdateVisibility, onDelete, onToggleLike, onChangeColor, onToggleFav}) {

    const {alert} = useContext(Context)

    const userId = extractUserId(sessionStorage.token)

    const handleLike = event => {
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

    const handleEditText = (event) => {


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
    let bgColor

    switch (element.color) {
        case 'yellow':
            bgColor = 'bg-[#fef08a]'
            break
        case 'red':
            bgColor = 'bg-[#fbcfe8]'
            break
        case 'green':
            bgColor = 'bg-[#99f6e4]'
            break
        case 'blue':
            bgColor = 'bg-[#bae6fd]'
    }




    return <li className={`${bgColor}  w-[30ch] p-3 rounded-lg border-solid border-2 border-[#6b7280]`} key={element.id}>
        <div className="flex justify-between">
            <Link to={`/users/${element.user.id}`}><strong className="w-[28ch] text-sm text-left">{element.user.name}</strong>
            </Link>
            

                {element.user.id === userId && <>
                    <select className="border-solid border-2 bg-[transparent] border-[#6b7280]" defaultValue={element.color}  name='colorToChange' onChange={handleChangeColor}>
                        <option value="red">red</option>
                        <option value="green">green</option>
                        <option value="blue">blue</option>
                        <option value="yellow">yellow</option>
                    </select>
                    <button className="border-solid border-2 border-[#6b7280] w-6 h-6 text-center m-1"  onClick={handleUpdateVisibility} >{element.visibility === 'public' ? '🌍' : '🛑'}</button>
                </>}
                
                {element.user.id === userId &&
                    <button className="border-solid border-2 border-[#6b7280] w-6 h-6 text-center m-1" onClick={handleDelete}>X</button>}
           
            </div>

            <p className="w-[24ch] text-lg text-left" contentEditable={element.user.id === userId} onKeyUp={handleEditText} suppressContentEditableWarning={true}>{element.text}</p>


            <div className="flex flex-row justify-end" >

                <button className="h-5 w-5" onClick={handleLike} title={element.likes.join('\n')} >
                    {element.likes.includes(userId) ? <HeartIcon className="h-5 w-5 text-red-500" /> : < HeartIconOutline className='h-5 w-5 text-black-500' />}</button>
                <p>{element.likes.length}</p>


            <button className="flex justify-center"  onClick={handleToggleFav}>{
                // user.favs && user.favs.includes(element.id) ?
                element.fav ?
                    <StarIcon className="h-5 w-5 text-[gold]" />
                    :
                    <StarIconOutline className="h-5 w-5 text-black-500" />}</button>

        </div>
    </li>
}

export default Item
