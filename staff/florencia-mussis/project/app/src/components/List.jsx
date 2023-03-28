import { BookmarkIcon } from '@heroicons/react/24/solid'
import { BookmarkIcon as BookmarkIconOutline } from '@heroicons/react/24/outline'
import Container from "../library/Container"
import { Link } from "react-router-dom"
import updateListArchived from '../logic/update-list-archived'
import Context from '../Context'
import { useContext, useState } from "react"
import Confirm from '../components/Confirm'
import deleteList from '../logic/delete-list'

function List({ element, onUpdateArchived, onDeleteList }) {
    const [deleteListConfirmOn, setDeleteListConfirmOn] = useState(false)

    const { alert } = useContext(Context)

    const handleDeleteList = () => {
        setDeleteListConfirmOn(true)
    }

    const handleCancelDeleteList = () => {
        setDeleteListConfirmOn(false)
    }

    const handleUpdateArchived = (elementId, archived) => {
        try {
            updateListArchived(sessionStorage.token, elementId, !archived, error => {
                if (error) {
                    alert(error.message)

                    return
                }
                onUpdateArchived(element.id, archived)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleAcceptDeleteList = () => {
        try {
            deleteList(sessionStorage.token, element.id, error => {
                if (error) {
                    alert(error.message)

                    return
                }
                
                onDeleteList(element.id)
        
                setDeleteListConfirmOn(false)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    return <Container TagName="li" className="m-2 w-full">

        <div className="p-4 w-full border-2 rounded-lg border-solid" key={element.id}>
            <div className='text-right'>
                <button className="border-2 px-2 py-1 text-black rounded text-md " onClick={handleDeleteList}>X</button>
            </div>

            <div className='gap-2 pt-3'>
                <Link to={`/lists/${element.id}`}>
                    <p className="text-xl lg:text-2xl">{element.title ? element.title : 'New list'}</p>
                </Link>

                <p className="text-lg font-light">{element.itemsTotalChecked}/{element.itemsTotalCount}</p>
            </div>

            <div className='text-right'>
                <button onClick={() => handleUpdateArchived(element.id, element.archived)}>{element.archived ? <BookmarkIcon className="h-6 w-6" /> : <BookmarkIconOutline className="h-6 w-6" />}</button>
            </div>
        </div>

        {deleteListConfirmOn && <Confirm message="Do you really want to delete this list?" onAccept={handleAcceptDeleteList} onCancel={handleCancelDeleteList} />}
    </Container>
}

export default List

