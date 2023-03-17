import { BookmarkIcon } from '@heroicons/react/24/solid'
import { BookmarkIcon as BookmarkIconOutline } from '@heroicons/react/24/outline'
import Container from "../library/Container"
import { Link } from "react-router-dom"
import deleteList from '../logic/delete-list'

function List({ element, onDeleteList }) {
    console.log('Item -> render')

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

    return <Container TagName="li" className="gap-4 m-3">
        <div className=" p-4 w-[50ch] border-2 rounded-lg border-solid" key={element.id}>
            <Link to={`/lists/${element.id}`}>
                <p className="text-2xl text-left">{element.title ? element.title : 'New list'}</p>
            </Link>

            <p className="w-7">{element.itemsTotalChecked}/{element.itemsTotalCount}</p>

            <button className="border-2 w-6 text-center m-1 text-black rounded text-xs" onClick={() => handleDeleteList(element.id)}>X</button>

            <button>{element.archived ? <BookmarkIcon className="h-4 w-4" /> : <BookmarkIconOutline className="h-4 w-4" />}</button>
        </div>
    </Container>
}

export default List

