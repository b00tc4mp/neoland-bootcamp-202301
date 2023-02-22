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
                    message: 'password updated successfully',
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

    return <div className="profile-panel bg-[gray]">
        <form onSubmit={handleChangePassword} className="update-password-panel">
            <input type="password" name="currentPassword" placeholder="current password" />
            <input type="password" name="newPassword" placeholder="new password" />
            <input type="password" name="newPasswordConfirm" placeholder="confirm new password" />
            <button type="submit" className="logout-button font-['Press_Start_2P'] border-[2px] border-[gold] text-[gold] p-1">Update password</button>
        </form>
        <p className={"feedback feedback-" + feedback.type}>{feedback.message}</p>
    </div>
}