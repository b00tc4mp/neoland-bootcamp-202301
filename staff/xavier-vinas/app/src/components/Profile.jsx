import { useState } from "react"
import unregisterUser from "../logic/unregisterUser"
import updateUserPassword from "../logic/update-user-password"


function Profile({ onUnregisterUser }) {

    const [feedback, setFeedback] = useState({
        message: "",
        type: ""
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
                        type: "error"
                    })
                    return
                }
                event.target.reset()
                setFeedback({
                    message: "pasword updated successfully",
                    type: "success"
                })
            })
        } catch (error) {
            setFeedback({
                message: error.message,
                type: "error"
            })
        }
    }

    const handleUnregisterUser = event => {
        event.preventDefault()

        const password = event.target.password.value


        try {
            unregisterUser(sessionStorage.userId, password, error => {
                if (error) {
                    setFeedback({
                        message: error.message,
                        type: "error"
                    })
                    return
                }
                
                onUnregisterUser()

                setFeedback({
                    message: "user deleted successfully",
                    type: "success"
                })
            })

        } catch (error) {

            setFeedback({
                message: error.message,
                type: "error"
            })
        }

    }

    return <div className="mx-12 bg-neutral-300 ">
        <h2 className="flex flex-col items-center underline decoration-double text-xl	 ">Update password</h2>
        <form className="py-10 gap-5 rounded-lg   flex flex-col items-center" onSubmit={handleChangePassword}>
            <input className="shadow-lg shadow-black p-1 rounded-full " type="password" name="currentPassword" placeholder="current password" />
            <input className="shadow-lg shadow-black p-1 rounded-full " type="password" name="newPassword" placeholder="new password" />
            <input className="shadow-lg shadow-black p-1 rounded-full " type="password" name="newPasswordConfirm" placeholder="confirm new password" />
            <button className="inline-block rounded border-2 border-danger px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10" type="submit">Update password</button>
        </form>
        <h2 className="flex flex-col items-center underline decoration-double text-xl">Delete Account</h2>
        <div className="mx-12 bg-neutral-300 " >
            <form className="py-10 gap-5 rounded-lg   border-neutral-400  flex flex-col items-center mb-6 " onSubmit={handleUnregisterUser}>
                <input className="shadow-lg shadow-black p-1 rounded-full mb-3" type="password" name="password" placeholder="your password" />
                <button className="inline-block rounded border-2 border-danger px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10" type="submit">Delete Account</button>


            </form>
        </div>
        <p className={"feedback feedback-" + feedback.type}>{feedback.message}</p>
    </div>
   
}
export default Profile