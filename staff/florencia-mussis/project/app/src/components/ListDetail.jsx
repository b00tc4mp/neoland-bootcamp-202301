import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import { UserPlusIcon } from '@heroicons/react/24/solid'
import { UserPlusIcon as UserPlusIconOutline } from '@heroicons/react/24/outline'
import retrieveList from "../logic/retrieve-list"
import updateListTitle from "../logic/update-list-title"
import Context from '../Context'
import Container from "../library/Container"
import createItem from "../logic/create-item"
import updateItemCheck from "../logic/update-item-check"
import updateItemText from "../logic/update-item-text"
import deleteItem from "../logic/delete-item"
import updateListShared from '../logic/update-list-shared'

function ListDetail() {
    console.log('ListDetail -> render')

    const [list, setList] = useState()

    const { listId } = useParams()

    const { alert } = useContext(Context)

    const loadList = () => {
        try {
            retrieveList(sessionStorage.token, listId, (error, list) => {
                if (error) {
                    alert(error.message)

                    return
                }
                setList(list)
            })
        } catch (error) {
            alert(error.message)
        }
    }
    
    useEffect(() => {
        loadList()
    }, [])

    const handleUpdateTitle = event => {
        try {
            updateListTitle(sessionStorage.token, listId, event.target.innerText, error => {
                if (error) {
                    alert(error.message)

                    return
                }
                
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleAddItem = event => {
        try {
            createItem(sessionStorage.token, listId, event.target.item.value, false, error => {
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

    const handleUpdateItemCheck = (event, itemId) => {
        try {
            updateItemCheck(sessionStorage.token, listId, itemId, event.target.checked, error => {
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

    const handleUpdateItemText = (event, itemId) => {
        try {
            updateItemText(sessionStorage.token, listId, itemId, event.target.innerText, error => {
                if (error) {
                    alert(error.message)

                    return
                }
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleDeleteItem = (itemId) => {
        try {
            deleteItem(sessionStorage.token, listId, itemId, error => {
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

    const handleUpdateShare = (listId, shared) => {
        try {
            updateListShared(sessionStorage.token, listId, !shared, error => {
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

    return <Container className="pt-6">

        <div className="px-4 pt-4 w-1/3 border-2 rounded-lg border-solid">

            {list && <>
                <div className="text-right px-2" >
                    <button className="w-7" onClick={() => handleUpdateShare(list.id, list.shared)}>
                        {list.shared ? <UserPlusIcon /> : <UserPlusIconOutline />}
                    </button>
                </div>

                <p className="w-auto text-xl" id={list.id} contentEditable={true} onKeyUp={handleUpdateTitle} suppressContentEditableWarning={true}>{list.title}</p>

                <p className="text-lg font-light">{list.itemsTotalChecked}/{list.itemsTotalCount}</p>

                <div>
                <form onSubmit={handleAddItem} className="flex justify-center gap-1 pt-6">
                    <input className="px-1 border-2 rounded-md w-3/5 h-10 drop-shadow-sm focus:outline-teal-500" type="item" name="item" placeholder=" Add element" />
                    <button type="submit" className=" drop-shadow-sm text-3xl flex">+</button>
                    </form>
                </div>

                <Container TagName="ul" className="py-8 justify-items-start ">
                    {list.items.map(item =>
                        <li className="flex gap-2" key={item.id}>
                            <input type="checkbox" id="checked" defaultChecked={item.checked} className="w-7"
                                onChange={event => handleUpdateItemCheck(event, item.id)} />

                            <label htmlFor="checked"></label><p className="w-60 text-left focus:outline-teal-500" id={item.id} contentEditable={true} onKeyUp={event => handleUpdateItemText(event, item.id)} suppressContentEditableWarning={true}>{item.text}</p>

                            <button className="w-6 text-center text-black  text-xs" onClick={() => handleDeleteItem(item.id)}>  X</button>
                        </li>)}
                </Container>
            </>}
        </div>
    </Container>
}


export default ListDetail

