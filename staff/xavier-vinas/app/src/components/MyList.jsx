import { useState } from "react"
import updateStickyText from "../logic/update-sticky-text"
import deleteSticky from "../logic/delete-sticky"
import toggleLikeSticky from "../logic/toggle-like-sticky"
import updateStickyVisibility from "../logic/update-sticky-visibility"
import retrieveMyStickies from "../logic/retrieve-my-stickies"





function MyList() {
    const [ListUpdateStamp, setListUpdateStamp] = useState(Date.now())


    let stickies
    try {
        stickies = retrieveMyStickies(sessionStorage.userId)
        console.log(stickies)
    } catch (error) {
        alert(error.message)
    }

    const handleEditText = event => {
        try {
            updateStickyText(sessionStorage.userId, event.target.id, event.target.innerText)

        } catch (error) {
            alert(error.message)

        }
    }

    const handleDelete = event => {
        try {
            deleteSticky(sessionStorage.userId, event.target.id)
            setListUpdateStamp(Date.now())
        } catch (error) {
            alert(error.message)
        }
    }
    const handleUpdateVisibility = event => {
        try {
            updateStickyVisibility(sessionStorage.userId, event.target.id, event.target.dataset.visibility === 'private' ? 'public' : 'private')
            setListUpdateStamp(Date.now)
        } catch (error) {
            alert(error.message)
        }
    }
    const handleLike = event => {
        try {
            toggleLikeSticky(sessionStorage.userId, event.target.id)

            setListUpdateStamp(Date.now())
        } catch (error) {
            alert(error.message)
        }
    }



    return <ul className="flex flex-col items-center bg-slate-200 ">
        {stickies.map(sticky => <li className="p-5 shadow-lg shadow-black flex flex-col items-center m-10 w-[40ch] bg-white rounded-full" key={sticky.id}>
            <div className="text-right">
                {sticky.user === sessionStorage.userId && <button className="w-5 h-5 bg-black text-[white] m-1" id={sticky.id} data-visibility={sticky.visibility} onClick={handleUpdateVisibility}>cambiar</button>}

                {sticky.user === sessionStorage.userId && <button className="w-5 h-5 bg-black text-[white] m-1" id={sticky.id} onClick={handleDelete}>x</button>}
            </div>
            <p id={sticky.id} contentEditable={sticky.user === sessionStorage.userId} onKeyUp={handleEditText} suppressContentEditableWarning={true}>{sticky.text}</p>

            <strong>{sticky.user}</strong>
            <div >
                <img className="flex flex-col items-center w-10"
                    src={sticky.likes.includes(sessionStorage.userId) ? "public/heart-full.svg" : "public/heart.svg"}
                    onClick={handleLike} id={sticky.id}
                />
            </div>
        </li>)}

    </ul>



}

export default MyList