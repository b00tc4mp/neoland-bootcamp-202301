function Profile(){
    console.log('Profile -> render')

    const [feedback,setFeedback]= React.useState({
      message:'',
      type:''
    })
    const handleChangePassword= (event)=>{
        event.preventDefault()
        
        const currentPassword = event.target.currentPassword.value
        const newPassword = event.target.newPassword.value
        const newPasswordConfirm = event.target.newPasswordConfirm.value

        try {
            updateUserPassword(sessionStorage.email, currentPassword,newPassword,newPasswordConfirm)
            
            event.target.reset()
            setFeedback({
              message:'password update successfully',
              type: 'success'
            })
        } catch (error) {

            setFeedback({
              message: error.message,
              type:'error'
            })
        }
    }

    return <div className="font-['Montserrat']bg-[#d1d5db] mt-10 p-3 ">
    <form className="flex flex-col " onSubmit={handleChangePassword} >
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
    <p className={"feedback feedback-" + feedback.type}>{feedback.message}</p>
  </div>
}