function Profile() {
    return <div className="profile-panel">
        <form className="update-password-panel">
            <input type="password" name="currentPassword" placeholder="current password" />
            <input type="password" name="newPassword" placeholder="new password" />
            <input type="password" name="newPasswordConfirm" placeholder="confirm new password" />
            <button type="submit">Update password</button>
        </form>
    </div>
}