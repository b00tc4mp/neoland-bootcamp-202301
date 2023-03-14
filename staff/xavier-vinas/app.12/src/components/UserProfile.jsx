import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import retrieveUserProfile from "../logic/retrieve-user-profile"

function UserProfile() {
    const [userProfile, setUserProfile] = useState()

    const { userProfileId } = useParams()

    useEffect(() => {
        try {
            retrieveUserProfile(sessionStorage.token, userProfileId, (error, userProfile) => { 
                if (error) {
                    alert(error)

                    return
                }
                setUserProfile(userProfile)
            })
        } catch (error) {
            console.log(error)
        }
    }, [])

    return <div>
        <h2>hola {userProfile?.name}</h2>
    </div>
}

export default UserProfile