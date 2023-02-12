function Profile() {
    console.log('profile -> render')

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
                message: 'password updated successfully',
                type: 'success'
            })

        } catch (error) {
            setFeedback({
                message: error.message,
                type: 'error'
            })
        }
    }

    return <div className="profile-panel">
        <form onSubmit={handleChangePassword} className="update-password-panel">
            <input type="password" name="currentPassword" placeholder="current password" />
            <input type="password" name="newPassword" placeholder="new password" />
            <input type="password" name="newPasswordConfirm" placeholder="confirm new password" />
            <button type="submit">Update password</button>
        </form>
        <p className={'feedback feedback-'+ feedback.type}>{feedback.message}</p>
    </div>
}