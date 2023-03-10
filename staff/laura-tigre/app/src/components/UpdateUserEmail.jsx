import { useState } from "react"
import updateUserEmail from "../logic/update-user-email"
import Button from "../library/Button"
import Container from "../library/Container"
import Feedback from "./Feedback"

function UpdateUserEmail() {
    console.log('UpdateUserEmail -> render')
    const [feedback, setFeedback] = useState()

    const handleSubmit = (event) => {
        event.preventDefault()

        const password = event.target.password.value
        const newEmail = event.target.newEmail.value

        try {
            updateUserEmail(sessionStorage.token, password, newEmail, error => {
                if (error) {
                    setFeedback({
                        message: error.message,
                        level: 'error'
                    })
                    return
                }
                event.target.reset()

                setFeedback({
                    message: 'email updated successfully',
                    level: 'success'
                })
            })
        } catch (error) {
            setFeedback({
                message: error.message,
                level: 'error'
            })
        }
    }


    return <Container>
        <Container TagName="form" onSubmit={handleSubmit} className="flex flex-col items-center gap-4 bg-[#d1d5db] mt-10 p-3 rounded-lg">
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

        </Container>
        {feedback && <Feedback message={feedback.message} level={feedback.level} />}
    </Container>

}

export default UpdateUserEmail