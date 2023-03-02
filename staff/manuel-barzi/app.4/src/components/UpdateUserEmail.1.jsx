import { useState } from 'react'
import updateUserEmail from '../logic/update-user-email'
import Button from '../library/Button'

function UpdateUserEmail() {
    console.log('UpdateUserEmail -> render')

    const [feedback, setFeedback] = useState({
        message: '',
        type: ''
    })

    const handleSubmit = event => {
        event.preventDefault()

        const newEmail = event.target.newEmail.value
        const password = event.target.password.value

        try {
            updateUserEmail(sessionStorage.userId, newEmail, password, error => {
                if (error) {
                    setFeedback({
                        message: error.message,
                        type: 'error'
                    })

                    return
                }

                event.target.reset()

                setFeedback({
                    message: 'email updated successfully',
                    type: 'success'
                })
            })
        } catch (error) {
            setFeedback({
                message: error.message,
                type: 'error'
            })
        }
    }

    return <div className="flex flex-col items-center">
        <form onSubmit={handleSubmit} className="update-password-panel flex flex-col gap-2">
            <input className="text-[gold] placeholder-[gold] bg-[transparent] font-odibee border-2 border-[gold] focus:outline-none p-1" type="email" name="newEmail" placeholder="new email" />
            <input className="text-[gold] placeholder-[gold] bg-[transparent] font-odibee border-2 border-[gold] focus:outline-none p-1" type="password" name="password" placeholder="password" />

            {/* <button type="submit" className="logout-button font-press border-[2px] border-[gold] text-[gold] p-1">Update email</button> */}
            <Button type="submit">Update email</Button>
        </form>
        <p className={`font-odibee ${feedback.type === 'success' ? "text-[greenyellow]" : "text-[tomato]"}`}>{feedback.message}</p>
    </div>
}

export default UpdateUserEmail