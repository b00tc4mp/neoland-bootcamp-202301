import { useState, useEffect } from 'react'

import retrievePublicStickies from '../logic/retrieve-public-stickies'
import updateStickyText from '../logic/update-sticky-text'
import deleteSticky from '../logic/delete-sticky'
import updateStickyVisibility from '../logic/update-sticky-visibility'
import toggleLikeSticky from '../logic/toggle-like-sticky'
import changeStickyColor from '../logic/change-sticky-color'

import { HeartIcon } from '@heroicons/react/24/solid'
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline'

function List({ listUpdateStamp }) {
    console.log('List -> render')

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

    useEffect(() => {
        loadList()
    }, [listUpdateStamp])

    const handleUpdateText = event => {
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

    const handleDelete = event => {
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

    const handleUpdateVisibility = event => {
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

    const handleToggleLike = event => {
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

    const handleChangeColor = event => {
        try {
            changeStickyColor(sessionStorage.userId, event.target.id, event.target.value, error => {
                if (error) {
                    alert(error.message)

                    return
                }
                setStickies(prevStickies => {
                    const copyOfStickies = [...prevStickies]

                    const index = copyOfStickies.findIndex(sticky => sticky._id === event.target.id)

                    copyOfStickies[index].color = event.target.value

                    return copyOfStickies
                })
            })
        } catch (error) {
            alert(error.message)
        }
    }

    return <ul className="flex flex-col items-center ">
        {stickies.map(sticky =>
            <li className={`background-${sticky.color} m-10 w-[40ch] p-10 border-double  border-2`} key={sticky._id}>
                {console.log(sticky.color)}
                <div className="text-right">
                    {sticky.user === sessionStorage.userId &&
                        <select className='bg-gray-400 rounded-full p-1 ' defaultValue={sticky.color} id={sticky._id} name='color' onChange={handleChangeColor}>
                            <option value="red">Red</option>
                            <option value="blue">blue</option>
                            <option value="yellow">yellow</option>
                            <option value="purple">purple</option>
                            <option value="green">green</option>
                            <option value="orange">orange</option>
                        </select>}
                    {sticky.user === sessionStorage.userId && <button className="w-5 h-5  text-[#020200] m-1" id={sticky._id} data-visibility={sticky.visibility} onClick={handleUpdateVisibility}>{sticky.visibility === 'public' ? '-' : '+'}</button>}

                    {sticky.user === sessionStorage.userId && <button className="w-5 h-5  text-[#030301] m-1" id={sticky._id} onClick={handleDelete}>x</button>}
                </div>

                <p className="p-2" id={sticky._id} contentEditable={sticky.user === sessionStorage.userId} onKeyUp={handleUpdateText} suppressContentEditableWarning={true}>{sticky.text}</p>

                <div className="flex flex-col items-end">
                    <button className="h-5 w-10 text-[#0a0802] m-1 flex justify-center" id={sticky._id} onClick={handleToggleLike} title={sticky.likes.join('\n')}>{sticky.likes.includes(sessionStorage.userId) ? <HeartIcon className="h-4 w-4 text-red-500" /> : <HeartIconOutline className="h-4 w-4 text-black-500" />} <span className="color-[white]">{sticky.likes.length}</span></button>

                    <strong>{sticky.user}</strong>
                </div>
            </li>)}
    </ul>
}

export default List