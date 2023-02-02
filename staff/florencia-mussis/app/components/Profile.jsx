function Profile() {
    console.log('Profile -> render')

    const [feedback, setFeedback] = React.useState({
        message: '',
        type: ''
    })

    const handleChangePassword = event => {
        event.preventDefault()

        const currentPassword = event.target.currentPassword.value
        const newPassword = event.target.newPassword.value
        const newPasswordConfirm = event.target.newPasswordConfirm.value

        try { 
            updateUserPassword(sessionStorage.email, currentPassword, newPassword, newPasswordConfirm)
            
            event.target.reset()

            setFeedback({
                message: '✅ Password updated successfully',
                type: 'success'
            })
       
        } catch (error){
            setFeedback({
                message: '❌ ' + error.message,
                type: 'error'
            })

        }

    }

    return <div className="profile-panel">
        <form onSubmit = {handleChangePassword} className="update-password-panel">
            <input type="password" name="currentPassword" placeholder="Current password" />
            <input type="password" name="newPassword" placeholder="New password" />
            <input type="password" name="newPasswordConfirm" placeholder="Confirm new password" />
            <button className="update-password" type="submit"> Update password</button>
        </form>
        <p className={"feedback feedback-" + feedback.type} > {feedback.message}</p>
    </div>
}