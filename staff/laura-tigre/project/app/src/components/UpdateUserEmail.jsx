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
       <Container TagName="form" className="sm: w-1/2 gap-4mt-10 p-1 rounded-lg w-277 drop-shadow-md" onSubmit={handleSubmit}>
      <fieldset className='sm: w-1/2 p-5 border-solid border-2 border-orange-500 rounded-md'>
        <legend>Change Password</legend>
        <input
          className="bg-transparent "
          type="password"
          name="currentPassword"
          placeholder="current password"
        />
        <input
          className="bg-transparent  "
          type="password"
          name="newPassword"
          placeholder="new password"
        />
        <input
          className="bg-transparent  "
          type="password"
          name="newPasswordConfirm"
          placeholder="confirm new password"
        />

        <Button type="submit">Update password</Button>

      </fieldset>
    {feedback && <Feedback message={feedback.message} level={feedback.level} />}
    </Container>

       </Container>
}

export default UpdateUserEmail