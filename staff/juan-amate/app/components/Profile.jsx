function Profile() {
    console.log('Profile -> render')

    const [feedback, setFeedback] = React.useState('')

    const handleSubmit = event => {
        event.preventDefault()

        const currentPassword = event.target.currentPassword.value
        const newPassword = event.target.newPassword.value
        const newPasswordConfirm = event.target.newPasswordConfirm.value

        try {
            updateUserPassword(currentPassword, newPassword, newPasswordConfirm)
        } catch(error) {
            setFeedback(error.message)
        }
    }

    return < div className = "profile-panel" >
        <form onSubmit={handleSubmit} className="update-password-panel">
            <input
                type="password"
                name="currentPassword"
                placeholder="current password"
            />
            <input
                type="password"
                name="newPassword"
                placeholder="newPassword"
            />
            <input
                type="password"
                name="newPasswordConfirm"
                placeholder="newPasswordConfirm"
            />
            <button type="submit">Update password</button>
        </form>
    </div >
}