import { useContext } from 'react'
import chat from '../logic/chat'
import Context from '../Context'
import Container from '../library/Container'
import Button from '../library/Button'

function Message({ onSendMessage, onCloseMessage, userIdTo}) {

    const { alert } = useContext(Context)

    const handleSubmitMessage = event => {
        event.preventDefault()
        try {
            const message = event.target.message.value

            chat(sessionStorage.token, userIdTo, message, error => {
                if (error) {
                    alert(error)
                    return
                }
             onSendMessage()
            })
        } catch (error) {
            alert(error.message)
        }

    }

   
    return <Container TagName="section" className="justify-center w-full h-full fixed top-0 bg-[#d6d3d1]/[0.5]">
        <Container className="justify-center p-4 bg-white">
            <button className='flex flex-row w-full justify-end' type='submit' onClick={onCloseMessage} >X</button>
            <form className='flex flex-col' onSubmit={handleSubmitMessage}>
                <label htmlFor='message'>Message :</label>
                <input type="text" id="message" className='mb-3' />
                <Button type='submit'>Send message</Button>
            </form>
        </Container>
    </Container>

}
export default Message
