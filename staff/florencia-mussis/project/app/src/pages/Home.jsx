import { useState, useEffect, useContext } from "react"
import ListDetail from "../components/ListDetail"
import Profile from "../components/Profile"
import Archived from "../components/Archived"
import retrieveUser from "../logic/retrieve-user"
import Context from '../Context'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import icono from "../img/icono.png"
import Button from "../library/Button"
import { BookmarkIcon } from '@heroicons/react/24/solid'
import Lists from "../components/Lists"

function Home() {
    console.log('Home -> render')

    const { alert } = useContext(Context)

    const navigate = useNavigate()

    const [user, setUser] = useState({})
    
    const [refreshTime, setRefreshTime] = useState()

    useEffect(() => {
        try {
            retrieveUser(sessionStorage.token, (error, user) => {
                if (error) {
                    alert(error.message)

                    return
                }
                setUser(user)
            })
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const handleLogout = () => {
        delete sessionStorage.token

        navigate('/login')
    }

    const handleNavigateToHome = event => {
        event.preventDefault()

        setRefreshTime(Date.now())
        navigate('/')
    }

    return <div className="h-full">

        <header className="fixed top-0 w-full flex justify-between p-2 shadow shadow-teal-500 bg-white">
            <a className="w-16" onClick={handleNavigateToHome}><img src={icono} /></a>

            <nav className="flex items-center gap-5 sm: gap-0.5">
                <Link to="/archived" className="m-3" href=""><BookmarkIcon className="h-8 w-8" /></Link>

                <Link to="/profile" className="font-montserrat sm: w-24 text-center" href="">{user.name}</Link>

                <Button onClick={handleLogout} className="w-24 text-sm h-7 rounded-md sm: w-20">Logout</Button>
            </nav>
        </header>

        <main className="py-20">
            <Routes>
                <Route path="/" element={<Lists refreshTime={refreshTime} />} />

                <Route path="/archived" element={<Archived />} />

                <Route path="/lists/:listId" element={<ListDetail />} />

                <Route path="/profile" element={<Profile onUnregisterUser={handleLogout} />} />
            </Routes>
        </main>
    </div>
}

export default Home