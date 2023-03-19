import { BookmarkIcon } from '@heroicons/react/24/solid'
import { BookmarkIcon as BookmarkIconOutline } from '@heroicons/react/24/outline'
import Container from "../library/Container"
import { Link } from "react-router-dom"
import deleteList from '../logic/delete-list'
import updateListArchived from '../logic/update-list-archived'
import Context from '../Context'
import { useContext } from "react"

function List({ element, onDeleteList,  onUpdateArchived }) {
    console.log('Item -> render')

    const { alert } = useContext(Context)

    const handleDeleteList = elementId => {
        try {
            deleteList(sessionStorage.token, elementId, error => {
                if (error) {
                    alert(error.message)

                    return
                }
                onDeleteList(elementId)
            })
        } catch (error) {
            alert(error.message)
        }
    }

   const handleUpdateArchived = (elementId, archived) => {
        try{
            updateListArchived(sessionStorage.token, elementId, !archived, error =>{
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

    return <Container TagName="li" className="gap-4 m-3">

        <div className="p-4 w-[50ch] border-2 rounded-lg border-solid" key={element.id}>
             <div className='text-right'>
             <button className="border-2 px-2 py-1 text-black rounded text-md " onClick={() => handleDeleteList(element.id)}>X</button>
             </div>

            <div className='gap-2'>
            <Link to={`/lists/${element.id}`}>
                <p className="text-xl">{element.title ? element.title : 'New list'}</p>
            </Link>

            <p className="text-lg font-light">{element.itemsTotalChecked}/{element.itemsTotalCount}</p>
            </div>

            <div className='text-right'>
            <button onClick={() => handleUpdateArchived(element.id, element.archived)}>{element.archived ? <BookmarkIcon className="h-6 w-6" /> : <BookmarkIconOutline className="h-6 w-6" />}</button>
            </div>
        </div>
    </Container>
}

export default List

