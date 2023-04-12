function Profile() {
  console.log('Profile -> render')

  const [feedback, setFeedback] = React.useState({
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

  return <div className="profile-panel">
    <form onSubmit={handleChangePassword} className="flex flex-col items-center gap-4 bg-[#d1d5db] mt-10 p-3">
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
  </div>
}