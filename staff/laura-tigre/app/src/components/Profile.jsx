import { useState } from 'react'
import updateUserPassword from '../logic/update-user-password'
import unregisterUser from '../logic/unregister-user'
import updateUserEmail from '../logic/update-user-Email'

function Profile({onUnregisterUser}) {
  console.log('Profile -> render')

  const [feedback, setFeedback] = useState({
    message: '',
    type: ''
  })
  const handleChangePassword = (event) => {
    event.preventDefault()

    const currentPassword = event.target.currentPassword.value
    const newPassword = event.target.newPassword.value
    const newPasswordConfirm = event.target.newPasswordConfirm.value

    try {
      updateUserPassword(sessionStorage.userId, currentPassword, newPassword, newPasswordConfirm, error => {
        if (error) {
          setFeedback({
            message: error.message,
            type: 'error'
          })

          return
        }
        event.target.reset()
        setFeedback({
          message: 'password update successfully',
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

  const handleUnregisterUser = (event) => {
    event.preventDefault()

    const password = event.target.password.value
    try {
      unregisterUser(sessionStorage.userId, password, error => {
        if (error) {
          alert(error.message)
          return
        }
        // delete sessionStorage.userId
        // onNavigateToLogin()
        onUnregisterUser()
      })
    } catch (error) {
      alert(error.message)
    }
  }

  const handleUpdateUserEmail= (event) =>{
    event.preventDefault()

    const password = event.target.password.value
    const newEmail = event.target.newEmail.value

    try {
      updateUserEmail(sessionStorage.userId, password, newEmail, error=>{
        if (error) {
          alert(error.message)
          return
        }
        event.target.reset()
      })
    } catch (error) {
      alert(error.message)
    }
  }
  return <div className="profile-panel, h-screen">
    <form onSubmit={handleChangePassword} className="flex flex-col items-center gap-4 bg-[#d1d5db] mt-10 p-3 rounded-lg">
    <legend className="text-xl">CHANGE PASSWORD</legend>
      <input
        className="bg-[#d6d3d1] border-4 hover:border-[#facc15] "
        type="password"
        name="currentPassword"
        placeholder="current password"
      />
      <input
        className="bg-[#d6d3d1] border-4 hover:border-[#facc15] "
        type="password"
        name="newPassword"
        placeholder="new password"
      />
      <input
        className="bg-[#d6d3d1] border-4 hover:border-[#facc15] "
        type="password"
        name="newPasswordConfirm"
        placeholder="confirm new password"
      />
      <button className=" bg-[#facc15] h-7 w-40" type="submit">Update password</button>
    </form>
    <p className={"feedback feedback-" + feedback.type}>{feedback.message}</p>



    <form onSubmit={handleUnregisterUser} className="flex flex-col items-center gap-4 bg-[#d1d5db] mt-10 p-3 rounded-lg">
    <legend className="text-xl">DELETE USER</legend>
      <input
        className="bg-[#d6d3d1] border-4 hover:border-[#facc15] "
        type="password"
        name="password"
        placeholder=" your password" />

      <button className=" bg-[#facc15] h-7 w-40" type="submit">Delete user</button>
    </form>

    <form onSubmit={handleUpdateUserEmail} className="flex flex-col items-center gap-4 bg-[#d1d5db] mt-10 p-3 rounded-lg">
    <legend className="text-xl">NEW EMAIL</legend>
      <input
        className="bg-[#d6d3d1] border-4 hover:border-[#facc15] "
        type="newEmail"
        name="newEmail"
        placeholder=" new email" />
      <input
        className="bg-[#d6d3d1] border-4 hover:border-[#facc15] "
        type="password"
        name="password"
        placeholder=" your password" />  

      <button className=" bg-[#facc15] h-7 w-40" type="submit">New Email</button>
    </form>

  </div>
}

export default Profile