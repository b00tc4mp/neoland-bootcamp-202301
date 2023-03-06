import updateStickyText from '../logic/update-sticky-text'
import deleteSticky from '../logic/delete-sticky'
import updateStickyVisibility from '../logic/update-sticky-visibility'
import changeStickyColor from '../logic/change-sticky-color'
import toggleLikeSticky from '../logic/toggle-like-sticky'
import toggleFavsSticky from '../logic/toggle-favs-sticky'
import { HeartIcon, StarIcon } from '@heroicons/react/24/solid'
import { HeartIcon as HeartIconOutline, StarIcon as StarIconOutline } from '@heroicons/react/24/outline'


function Item({ element, onUpdateVisibility, onDelete, onToggleLike, onChangeColor, onToggleFavs, user }) {



    const handleLike = event => {
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

    const handleFavs = event => {
        try {

            const stickyId = event.currentTarget.dataset.id

            toggleFavsSticky(sessionStorage.userId, stickyId, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                onToggleFavs(sessionStorage.userId, stickyId)
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

    const handleEditText = (event) => {


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
            <strong className="w-[28ch] text-left">{element.user.name}</strong>
            

                {element.user.id === sessionStorage.userId && <>
                    <select className="border-solid border-2 bg-[transparent] border-[#6b7280]" defaultValue={element.color} data-id={element.id} name='colorToChange' onChange={handleChangeColor}>
                        <option value="red">red</option>
                        <option value="green">green</option>
                        <option value="blue">blue</option>
                        <option value="yellow">yellow</option>
                    </select>
                    <button className="border-solid border-2 border-[#6b7280] w-6 h-6 text-center m-1" data-id={element.id} onClick={handleUpdateVisibility} data-visibility={element.visibility}>{element.visibility === 'public' ? '🌍' : '🛑'}</button>
                </>}
                
                {element.user.id === sessionStorage.userId &&
                    <button className="border-solid border-2 border-[#6b7280] w-6 h-6 text-center m-1" data-id={element.id} onClick={handleDelete}>X</button>}
           
            </div>

            <p className="w-[28ch] text-left" data-id={element.id} contentEditable={element.user.id === sessionStorage.userId} onKeyUp={handleEditText} suppressContentEditableWarning={true}>{element.text}</p>


            <div className="flex flex-row justify-end" >

                <button className="h-5 w-5" onClick={handleLike} data-id={element.id} title={element.likes.join('\n')} >
                    {element.likes.includes(sessionStorage.userId) ? <HeartIcon className="h-5 w-5 text-red-500" /> : < HeartIconOutline className='h-5 w-5 text-black-500' />}</button>
                <p>{element.likes.length}</p>


            <button className="h-5 w-10 text-[gold] m-1 flex justify-center" data-id={element.id} onClick={handleFavs}>{
                // user.favs && user.favs.includes(element.id) ?
                user.favs?.includes(element.id) ?
                    <StarIcon className="h-4 w-4 text-[gold]" />
                    :
                    <StarIconOutline className="h-4 w-4 text-black-500" />}</button>

        </div>
    </li>
}

export default Item
