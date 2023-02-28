import { useState } from "react"
import updateUserEmail from "../logic/update-user-Email"
import Button from "../library/Button"

function UpdateUserEmail() {
    console.log('UpdateUserEmail -> render')
    const [feedback, setFeedback] = useState({
        message: '',
        type: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault()

        const password = event.target.password.value
        const newEmail = event.target.newEmail.value

        try {
            updateUserEmail(sessionStorage.userId, password, newEmail, error => {
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
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 bg-[#d1d5db] mt-10 p-3 rounded-lg">
            <legend className="text-xl">NEW EMAIL</legend>
            <input
                className="bg-[#d6d3d1] border-4 hover:border-[#facc15] "
                type="email"
                name="newEmail"
                placeholder=" new email" />
            <input
                className="bg-[#d6d3d1] border-4 hover:border-[#facc15] "
                type="password"
                name="password"
                placeholder=" your password" />

            {/* <button className=" bg-[#facc15] h-7 w-40" type="submit">New Email</button> */}
            <Button type ="submit">New Email</Button>

        </form>
            <p className={`font-odibee ${feedback.type === 'success' ? "text-[#4ae84a]" : "text-[tomato]"}`}>{feedback.message}</p>
    </div>

}

export default UpdateUserEmail