import {  useState, useEffect } from "react"
import retrievePublicStickies from "../logic/retrieve-public-stickies"
import updateStickyText from "../logic/update-sticky-text"
import deleteSticky from "../logic/delete-sticky"
import updateStickyVisibility from "../logic/update-sticky-visibility"
import toggleLikeSticky from "../logic/toggle-like-sticky"
import { HeartIcon } from '@heroicons/react/24/solid'
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline'
import Container from '../library/Container'


function List({ listUpdateStamp }) {
    console.log('List ->render')

    const [stickies, setStickies] = useState([])

    const loadList = () => {
        try {
            retrievePublicStickies(sessionStorage.userId, (error, stickies) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setStickies(stickies)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => { //se pinta solo al cargar el componente si quiero que se refresque debo indicarlo dentro de los []
       loadList()
    }, [listUpdateStamp])


    const handleUpdateText = (event) => {
        try {
            updateStickyText(sessionStorage.userId, event.target.id, event.target.innerText, error => {
                if (error) {
                    alert(error.message)

                    return
                }
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleDeleteSticky = (event) => {
        try {
            deleteSticky(sessionStorage.userId, event.target.id, error => {
                if (error) {
                    alert(error.message)

                    return
                }
                loadList()
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleUpdateVisibility = (event) => {
        try {
            updateStickyVisibility(sessionStorage.userId, event.target.id, event.target.dataset.visibility === 'public' ? 'private' : 'public', error => {
                if (error) {
                    alert(error.message)

                    return
                }
                loadList()
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleLike = (event) => {
        try {
            toggleLikeSticky(sessionStorage.userId, event.currentTarget.id, error => {
                if (error) {
                    alert(error.message)

                    return
                }
                loadList()
            })
        } catch (error) {
            alert(error.message)
        }
    }

    return <Container TagName="ul" className="gap-4 m-3">
        {stickies.map(sticky => <li className="p-4 w-[50ch] border-2 flex flex-col items-end rounded-lg border-solid" key={sticky._id}>
            <div>
                {sticky.user === sessionStorage.userId &&
                    <button className={"text-white uppercase rounded-md border-white py-1 px-1 text-sm items-center" + (sticky.visibility === 'public' ? ' bg-green-500' : ' bg-red-500')} id={sticky._id} data-visibility={sticky.visibility} onClick={handleUpdateVisibility}>{sticky.visibility}</button>} 

                {sticky.user === sessionStorage.userId &&
                    <button className="border-2 border-[black] w-7 h-7 text-center m-1 text-black uppercase rounded-md text-sm" id={sticky._id} onClick={handleDeleteSticky}>X</button>}
            </div>

            <p className="w-[45ch] text-left" id={sticky._id} contentEditable={sticky.user === sessionStorage.userId} onKeyUp={handleUpdateText} suppressContentEditableWarning={true}>{sticky.text}</p>

            <div className="flex" >
                <button className="h-5 w-5" onClick={handleLike} id={sticky._id} title={sticky.likes.join('\n')} >
                    {sticky.likes.includes(sessionStorage.userId) ? <HeartIcon className="h-4 w-4 text-red-500" /> : < HeartIconOutline className='h-4 w-4 text-black-500' />}</button>
                <p>{sticky.likes.length}</p>
            </div>
            <strong className="text-xs">{sticky.user}</strong>
        </li>)}
    </Container>
}

export default List