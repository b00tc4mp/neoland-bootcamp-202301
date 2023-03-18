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

    return <Container className="flex flex-col justify-center text-left border-2 rounded-md w-12/12">

        {list && <>
            <p className="w-[45ch] text-left" id={list.id} contentEditable={true} onKeyUp={handleUpdateTitle} suppressContentEditableWarning={true}>{list.title}</p>

            <div className="flex justify-end" >
                <button className="w-7 flex justify-center" onClick={() => handleUpdateShare(list.id, list.shared)}>
                    {list.shared ? <UserPlusIcon /> : <UserPlusIconOutline />}
                </button>
            </div>

            <p>{list.itemsTotalChecked}/{list.itemsTotalCount}</p>

            <Container TagName="form" onSubmit={handleAddItem} className="justify-center gap-6">
                <button type="submit" className="drop-shadow-sm text-3xl">+</button>

                <input className="border-2 rounded-md w-56 drop-shadow-sm" type="item" name="item" placeholder="Add element" />

            </Container>

            <Container TagName="ul" className="gap-3 justify-items-start ">
                {list.items.map(item =>
                    <li className="flex" key={item.id}>
                        <input type="checkbox" id="checked" defaultChecked={item.checked} className=""
                            onChange={event => handleUpdateItemCheck(event, item.id)} />

                        <label htmlFor="checked"></label><p className="w-[45ch] text-left" id={item.id} contentEditable={true} onKeyUp={event => handleUpdateItemText(event, item.id)} suppressContentEditableWarning={true}>{item.text}</p>

                        <button className="border-2 w-6 text-center m-1 text-black rounded text-xs" onClick={() => handleDeleteItem(item.id)}>✖️</button>
                    </li>)}
            </Container>
        </>}

    </Container>
}


export default ListDetail

