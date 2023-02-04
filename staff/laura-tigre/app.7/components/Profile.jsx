function Profile(){
    console.log('Profile -> render')

    const feedbackChange = 'Credentials changes'
    const handleSubmit= (event)=>{
        event.preventDefault()

        const currentPassword = event.target.currentPassword.value
        const newPassword = event.target.newPassword.value
        const newPasswordConfirm = event.target.newPasswordConfirm.value

        try {
            updateUserPassword(currentPassword,newPassword,newPasswordConfirm)
            setFeedbackChange()
        } catch (error) {
            setFeedback(error.message)
        }
    }

    return <div className="profile-panel">
    <form onSubmit={handleSubmit} className="update-password-panel">
      <input
        type="password"
        name="currentPassword"
        placeholder="current password"
      />
      <input
        type="password"
        name="newPassword"
        placeholder="new password"
      />
      <input
        type="password"
        name="newPasswordConfirm"
        placeholder="confirm new password"
      />
      <button type="submit">Update password</button>
    </form>
    <p className="feedback-changed">{feedbackChange}</p>
    <p className="feedback">{feedback}</p>
  </div>
}