import { useState, useEffect, useContext } from "react"
import retrieveUser from "../logic/retrieve-user"
import Context from '../Context'

function Home() {
    console.log('Home -> render')

    const { alert } = useContext(Context)
    

    const [listUpdateStamp, setListUpdateStamp] = useState(Date.now())
    const [user, setUser] = useState({})


    useEffect(() => {
        try {
            retrieveUser(sessionStorage.token, (error, user) => {
                if (error) {
                    alert(error.message)

                    return
                }
                setUser(user) //se llama a api y nos envia el usuario
            })
        } catch (error) {
            alert(error.message)
        }
    }, [])

    return <div className="max-h-md font-['Montserrat']">
    <strong className="text-xs text-left">{user.name}</strong>
    </div>
}

export default Home