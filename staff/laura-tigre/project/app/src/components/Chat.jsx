import { useState, useEffect, useContext } from "react"
import Context from '../Context'
import Container from '../library/Container'
import Button from "../library/Button"
import retrieveChat from '../logic/retrieve-chat'
import chat from "../logic/chat"
import { useParams } from "react-router-dom"
import extractUserId from "../utils/extractUserId"

function Chat() {
    const { alert } = useContext(Context)
    const [currentChat, setCurrentChat] = useState()
    const { chatId } = useParams()

    const userId = extractUserId(sessionStorage.token)

    const loadList = () => {
        try {
            retrieveChat(sessionStorage.token, chatId, (error, currentChat) => {
                if (error) {
                    alert(error)
                    return
                }

                setCurrentChat(currentChat)
            })
        } catch (error) {

            alert(error.message)
        }
    }
    const handleSubmitMessage = event => {
        event.preventDefault()
        try {
            const message = event.target.message.value
            const index = currentChat.users.findIndex(user => user.id === userId)
            const userTo = currentChat.users[index ? 0 : 1]


            chat(sessionStorage.token, userTo.id, message, error => {
                if (error) {
                    alert(error)
                    return
                }

                loadList()
            })
        } catch (error) {
            alert(error.message)
        }

    }
    useEffect(() => {
        loadList()
        const loadListIntervalId = setInterval(() => {
            loadList()
        }, 2000)

        return ()=> clearInterval(loadListIntervalId)
    }, [])

    return <Container>

        <Container TagName="ul" className="sm: 1/2 gap-4 py-10 ">
            {currentChat && currentChat.messages.map(message => <li className="w-[30ch] p-3 rounded-lg border-solid border-2 border-[#d6d3d1] overflow-auto" key={message.id} id={message.id} >
                <p className={(message.user.id === userId ? 'text-right w-full' : 'text-left w-full')}>{message.user.name}</p>
                <p className="mt-3 text-sm">{message.message}</p>

            </li>)}
        </Container>
        <Container className="justify-center p-4 bg-white mb-20">
            <form className='flex flex-col' onSubmit={handleSubmitMessage}>
                <label htmlFor='message'>Message :</label>
                <input type="text" name="message" className='mb-3' />
                <Button type='submit'>Send message</Button>
            </form>
        </Container>
    </Container>

}

export default Chat