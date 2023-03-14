import { useState } from 'react'
import Container from '../library/Container'
import unregisterUser from '../logic/unregister-user'

function UnregisterUser(onUnregisterUser) {

    const [feedback, setFeedback] = useState({
        message: '',
        type: ''
    })

    const handleSubmit = event => {
        event.preventDefault()

        const password = event.target.password.value

        try {
            unregisterUser(sessionStorage.userId, password, error => {
                if (error) {
                    setFeedback({
                        message: error.message,
                        type: 'error'
                    })

                    return
                }

                event.target.reset()

                delete sessionStorage.userId

                onUnregisterUser()
            })
        } catch (error) {
            setFeedback({
                message: error.message,
                type: 'error'
            })
        }
    }
    return <Container >
        <Container  >
        <h2 className="flex flex-col items-center underline decoration-double text-xl">Delete Account</h2>
            <Container TagName='form' onSubmit={handleSubmit}>
                <input className="shadow-lg shadow-black p-1 rounded-full mb-3" type="password" name="password" placeholder="your password" />
                <button className="inline-block rounded border-2 border-danger px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10" type="submit">Delete Account</button>

            </Container>
        </Container>
        <p className={"feedback feedback-" + feedback.type}>{feedback.message}</p>
    </Container>
}

export default UnregisterUser
