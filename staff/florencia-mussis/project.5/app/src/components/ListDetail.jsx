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
import removeCheckedItemsFromList from '../logic/remove-checked-items-from-list'
import Confirm from "./Confirm"
import toggleAllItemsCheck from '../logic/toggle-all-items-check'
import shareList from "../logic/share-list"
import removeSharedFromList from "../logic/remove-shared-from-list"
import updateListSharedMode from "../logic/update-list-shared-mode"
import extractUserId from "../utils/extractUserId"

function ListDetail() {
    console.log('ListDetail -> render')

    const [list, setList] = useState()

    const { listId } = useParams()

    const { alert } = useContext(Context)

    const [removeCheckedItemsFromListConfirmOn, setremoveCheckedItemsFromListConfirmOn] = useState(false)

    const [showShare, setShowShare] = useState(false)

    const handleOpenShareds = () => {
        setShowShare(true)
    }

    const handleCloseShareds = () => {
        setShowShare(false)
    }

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
        event.preventDefault()
        try {
            createItem(sessionStorage.token, listId, event.target.item.value, false, error => {
                if (error) {
                    alert(error.message)

                    return
                }
                loadList()
                event.target.reset()
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

    const handleRemoveCheckedItemsFromLists = () => {
        setremoveCheckedItemsFromListConfirmOn(true)
    }

    const handleAcceptRemoveCheckedItemsFromList = () => {
        try {
            removeCheckedItemsFromList(sessionStorage.token, listId, error => {
                if (error) {
                    alert(error.message)

                    return
                }
                loadList()
                setremoveCheckedItemsFromListConfirmOn(false)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleCancelRemoveCheckedItemsFromList = () => {
        setremoveCheckedItemsFromListConfirmOn(false)
    }

    const handleToggleAllItemsCheck = () => {
        try {
            toggleAllItemsCheck(sessionStorage.token, listId, error => {
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

    const handleShareList = event => {
        event.preventDefault()
        try {
            shareList(sessionStorage.token, listId, event.target.email.value, event.target.mode.value, error => {
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

    const handleRemoveSharedFromList = (sharedId) => {
        try {
            removeSharedFromList(sessionStorage.token, listId, sharedId, error => {
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

    const handleUpdateListShareMode = (sharedId, mode) => {
        try {
            updateListSharedMode(sessionStorage.token, listId, sharedId, mode, error => {
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

    if (list) {
        const userId = extractUserId(sessionStorage.token)

        let isOwner, isEditor, isViewer

        if (list.user === userId) {
            isOwner = true
            isEditor = true
        } else {
            isOwner = false

            isViewer = list.shareds.some(shared => {
                return shared.user.id === userId && shared.mode === 'viewer'
            })

            isEditor = list.shareds.some(shared => {
                return shared.user.id === userId && shared.mode === 'editor'
            })
        }

        const allChecked = list.items.length ? list.items.every(item => item.checked) : false

        return <Container className="border-box pt-14 mx-4 lg:mx-9">

            <div className="border-box w-full px-4 pt-4  border-2 rounded-lg border-solid lg:w-6/12 ">
                {isOwner && <div className="text-right px-2" >
                    <button className="w-7" onClick={handleOpenShareds}>
                        {list.shareds.length >= 1 && <UserPlusIcon />}
                        {list.shareds.length <= 0 && <UserPlusIconOutline />}
                    </button>
                </div>}

                <p className="w-auto text-xl lg:text-2xl" id={list.id} contentEditable={isEditor} onKeyUp={handleUpdateTitle} suppressContentEditableWarning={true} >{list.title}</p>

                <p className="text-lg font-light">{list.itemsTotalChecked}/{list.itemsTotalCount}</p>

                {isEditor && <div >
                    <form onSubmit={handleAddItem} className="flex justify-center gap-1 pt-6">
                        <input className="px-1 border-2 rounded-md w-4/5 h-10 focus:outline-teal-500" type="item" name="item" placeholder=" Add element" autoFocus />
                        <button type="submit" className="text-4xl flex">+</button>
                    </form>
                </div>}

                {isEditor && <div>
                    {list.items.length > 1 && <div className="flex justify-between pt-10 ">
                        <input type="checkbox" className="w-8 pl-0" onChange={handleToggleAllItemsCheck} checked={allChecked} />
                        <button onClick={handleRemoveCheckedItemsFromLists} className="border-2 rounded-md text-center px-2">X</button>
                    </div>}
                </div>}

                <Container TagName="ul" className="py-8 justify-items-start px-1">
                    {list.items.map(item =>
                        <li className="w-full flex justify-between gap-2 lg:gap-7" key={item.id}>
                            <input type="checkbox" disabled={isViewer} checked={item.checked} className=" w-7" onChange={event => handleUpdateItemCheck(event, item.id)} />

                            <label htmlFor="checked"></label><p className={`w-full text-left focus:outline-teal-500 lg:text-lg ${item.checked ? 'line-through' : ''}`} id={item.id} contentEditable={isEditor} onKeyUp={event => handleUpdateItemText(event, item.id)} suppressContentEditableWarning={true}>{item.text}</p>

                            {isEditor && <button className="w-6 text-center text-black text-sm" onClick={() => handleDeleteItem(item.id)}>  X</button>}
                        </li>)}
                </Container>
            </div>

            {showShare &&
                <Container TagName="section" className="justify-center w-screen h-full fixed top-0 bg-black/[0.5]">
                    <div className="justify-center px-4 pt-4 border-2 rounded-lg border-solid sm: w-11/12 bg-white">
                        <div className="flex justify-between">
                            <p className="text-center text-xl">Share</p>
                            <button onClick={handleCloseShareds} className="border-2 rounded-md text-left px-2">X</button>
                        </div>
                        <form onSubmit={handleShareList} className="flex flex-col justify-center pt-6 gap-4">
                            <div className="flex gap-2">
                                <input className="px-1 border-2 rounded-md w-4/5 h-10 drop-shadow-sm focus:outline-teal-500" type="email" name="email" placeholder=" Add people" />
                                <div className="flex items-center gap-1">
                                    <input type="radio" name="mode" value="viewer" id="viewer" defaultChecked />
                                    <label htmlFor="viewer">Viewer</label>
                                </div>
                                <div className="flex items-center gap-1">
                                    <input type="radio" name="mode" value="editor" id="editor" />
                                    <label htmlFor="editor">Editor</label>
                                </div>
                            </div>
                            <div className="text-center">
                                <button type="submit" className=" drop-shadow-sm text-4xl">+</button>
                            </div>
                        </form>

                        <Container TagName="ul" className="py-8 justify-between gap-2">
                            {list.shareds.map(shared =>
                                <li className="flex gap-8" key={shared.id}>
                                    <p className="w-20 text-center">{shared.user.name}</p>
                                    <select name="mode" onChange={event => handleUpdateListShareMode(shared.id, event.target.value)} value={shared.mode}>
                                        <option value="viewer">Viewer</option>
                                        <option value="editor">Editor</option>
                                    </select>
                                    <button className="w-6 text-center text-black text-sm border rounded" onClick={() => handleRemoveSharedFromList(shared.id)}>  X</button>
                                </li>)}
                        </Container>
                    </div>
                </Container>
            }

            {removeCheckedItemsFromListConfirmOn && <Confirm message="Do you want to remove all selected items?" onAccept={handleAcceptRemoveCheckedItemsFromList} onCancel={handleCancelRemoveCheckedItemsFromList} />}
        </Container>
    } else return null
}

export default ListDetail

