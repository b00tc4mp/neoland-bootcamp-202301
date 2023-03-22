import { useState} from "react"
import {useParams} from 'react-router-dom'
import updateUserPassword from '../logic/update-user-password'
import updateUserEmail from '../logic/update-user-email'
import unregisterParent from "../logic/unregister-parent"
import Button from '../library/Button'
import Container from '../library/Container'
import Feedback from './Feedback'



function ProfileUserParent() {
  console.log('Profile -> render')
  console.log('UpdateUserPassword -> render')

  const [feedback, setFeedback] = useState()
  const {parentId} = useParams()

 

  const handleSubmit = (event) => {
    event.preventDefault()

    const currentPassword = event.target.currentPassword.value
    const newPassword = event.target.newPassword.value
    const newPasswordConfirm = event.target.newPasswordConfirm.value

    try {
      updateUserPassword(sessionStorage.token, currentPassword, newPassword, newPasswordConfirm, error => {
        if (error) {
          setFeedback({
            message: error.message,
            level: 'error'
          })

          return
        }
        event.target.reset()
        setFeedback({
          message: 'password update successfully',
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
  const handleSubmitEmail = (event) => {
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

 
 
  const handleSubmitUnregister = (event) => {
    event.preventDefault()

    const password = event.target.password.value
    try {
        unregisterParent(sessionStorage.token, password, error => {
            if (error) {

                setFeedback({
                    message: error.message,
                    level: 'error'
                })
                return
            }
            delete sessionStorage.token
            
        })
    } catch (error) {
        setFeedback({
            message: error.message,
            level: 'error'
        })

    }
}


  const handleSubmitAvailability = () => {


  }

  return <Container className="mb-20">
    <form className='sm: w-1/2  p-5' onSubmit={handleSubmitAvailability}>
      <fieldset className='sm: w-1/2 p-5 border-solid border-2 border-orange-500 rounded-md'>
        <legend>Availability</legend>
        <table className='table table-fixed m-5'>
          <thead>
            <tr className='space-x-1'>
              <th>Day</th>
              <th>Morning</th>
              <th>Afternoon</th>
              <th>Evening</th>
            </tr>
          </thead>
          <tbody>
            <tr className='text-center space-x-1'>
              <th className='space-x-2'>Monday</th>
              <td><input type="checkbox" id='mondayMorningSelected' ></input></td>
              <td><input type="checkbox" id='mondayAfternoonSelected' name='mondayAfternoonSelected' ></input></td>
              <td><input type="checkbox" id='mondayEveningSelected' name='mondayEveningSelected' ></input></td>

            </tr>
            <tr className='text-center space-x-1'>
              <th className='space-x-2'>Tuesday</th>
              <td><input type="checkbox" id='tuesdayMorningSelected' name='tuesdayMorningSelected' ></input></td>
              <td><input type="checkbox" id='tuesdayAfternoonSelected' name='tuesdayAfternoonSelected' ></input></td>
              <td><input type="checkbox" id='tuesdayEveningSelected' name='tuesdayEveningSelected' ></input></td>

            </tr>
            <tr className='text-center space-x-1'>
              <th className='space-x-2'>Wendsday</th>
              <td><input type="checkbox" id='wendsdayMorningSelected' name='wendsdayMorningSelected' ></input></td>
              <td><input type="checkbox" id='wendsdayAfternoonSelected' name='wendsdayAfternoonSelected' ></input></td>
              <td><input type="checkbox" id='wendsdayEveningSelected' name='wendsdayEveningSelected' ></input></td>

            </tr>
            <tr className='text-center space-x-1'>
              <th className='space-x-2'>Thursday</th>
              <td><input type="checkbox" id='thursdayMorningSelected' name='thursdayMorningSelected' ></input></td>
              <td><input type="checkbox" id='thursdayAfternoonSelected' name='thursdayAfternoonSelected' ></input></td>
              <td><input type="checkbox" id='thursdayEveningSelected' name='thursdayEveningSelected' ></input></td>

            </tr>
            <tr className='text-center space-x-1'>
              <th className='space-x-2'>Friday</th>
              <td><input type="checkbox" id='fridayMorningSelected' name='fridayMorningSelected' ></input></td>
              <td><input type="checkbox" id='fridayAfternoonSelected' name='fridayAfternoonSelected' ></input></td>
              <td><input type="checkbox" id='fridayEveningSelected' name='fridayEveningSelected' ></input></td>

            </tr>
            <tr className='text-center space-x-1'>
              <th className='space-x-2'>Saturday</th>
              <td><input type="checkbox" id='saturdayMorningSelected' name='saturdayMorningSelected' ></input></td>
              <td><input type="checkbox" id='saturdayAfternoonSelected' name='saturdayAfternoonSelected' ></input></td>
              <td><input type="checkbox" id='saturdayEveningSelected' name='saturdayEveningSelected' ></input></td>

            </tr>
            <tr className='text-center space-x-1'>
              <th className='space-x-2'>Sunday</th>
              <td><input type="checkbox" id='sundayMorningSelected' name='sundayMorningSelected' ></input></td>
              <td><input type="checkbox" id='sundayAfternoonSelected' name='sundayAfternoonSelected' ></input></td>
              <td><input type="checkbox" id='sundayEveningSelected' name='sundayEveningSelected' ></input></td>

            </tr>
          </tbody>
        </table>

        <Button type="submit">New Availability</Button>
      </fieldset>
    </form>

    <Container TagName="form" className="gap-4mt-10 p-1 rounded-lg w-277 drop-shadow-md" onSubmit={handleSubmit}>
      <fieldset className='sm: w-1/2 p-5 border-solid border-2 border-orange-500 rounded-md'>
        <legend className="text-xl">CHANGE PASSWORD</legend>
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
    </Container>
    {feedback && <Feedback message={feedback.message} level={feedback.level} />}

    <Container TagName="form" onSubmit={handleSubmitEmail} className="flex flex-col items-center justify-center gap-4 mt-10 p-3 rounded-lg">
      <fieldset className='sm: w-1/2 p-5 border-solid border-2 border-orange-500 rounded-md'>
        <legend className="text-xl">NEW EMAIL</legend>
        <input
          className="bg-transparent "
          type="email"
          name="newEmail"
          placeholder=" new email" />
        <input
          className="bg-transparent "
          type="password"
          name="password"
          placeholder=" your password" />


        <Button type="submit">New Email</Button>

      </fieldset>

    </Container>
    {feedback && <Feedback message={feedback.message} level={feedback.level} />}

   

    <Container TagName="form" onSubmit={handleSubmitUnregister} className="flex flex-col items-center justify-center gap-4 mt-10 p-3 rounded-lg">
      <fieldset className='sm: w-1/2 p-5 border-solid border-2 border-orange-500 rounded-md'>
        <legend className="text-xl">UNREGISTER USER</legend>
       
        <input
          className="bg-transparent "
          type="password"
          name="unregister"
          placeholder=" your password" />
        <Button type="submit">Unregister user</Button>

      </fieldset>

    </Container>
    {feedback && <Feedback message={feedback.message} level={feedback.level} />}


  </Container>







}
export default ProfileUserParent
