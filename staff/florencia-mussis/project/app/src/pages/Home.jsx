import { useState, useEffect, useContext } from "react"
import ListDetail from "../components/ListDetail"
import Profile from "../components/Profile"
import Archived from "../components/Archived"
import  Shared  from "../components/Shared"
import retrieveUser from "../logic/retrieve-user"
import Context from '../Context'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import icono from "../img/icono.png"
import Button from "../library/Button"
import { BookmarkIcon } from '@heroicons/react/24/solid'
import Lists from "../components/Lists"
import { Bars3Icon } from '@heroicons/react/24/solid'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { UserPlusIcon } from '@heroicons/react/24/solid'
import { Cog6ToothIcon } from '@heroicons/react/24/solid'

function Home() {
    console.log('Home -> render')

    const { alert } = useContext(Context)

    const [showNav, setShowNav] = useState(false)

    const handleClick = () => {
        setShowNav(!showNav)

    }

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


        <header className="fixed top-0 w-full justify-between flex p-2 shadow shadow-teal-500 bg-white py-5">
            <a className="w-16 lg:w-20" onClick={handleNavigateToHome}><img src={icono} /></a>
            <button onClick={handleClick} className='mx-3 text-center lg: mx-9'>
                {showNav ? <XMarkIcon className='mt-8 h-8 w-8' /> : <Bars3Icon className='h-8 w-8'/>}
            </button>

            {showNav &&
                <div onClick={handleClick} className=" w-full h-full fixed">
                    <ul className='flex flex-col items-center bg-teal-500 fixed top-24 text-white text-xl mt-2 py-2  w-44 gap-y-2 rounded right-0 lg:mt-5'>

                        <Link to="/archived" className="m-3" href=""><BookmarkIcon className=" m-auto h-10 w-10"/>Archived lists</Link>

                        <Link to="/shared" className="m-3" href=""><UserPlusIcon className="m-auto h-10 w-10"/>Shared lists</Link>

                        <Link to="/profile" className="m-3" href=""><Cog6ToothIcon className="m-auto h-10 w-10"/>{user.name}</Link>

                        <Button onClick={handleLogout} className="w-24 text-sm h-7 mt-2 rounded-md sm: w-20">LOGOUT</Button>
                    </ul>
                </div>
            }
        </header>

        <main className="py-20">
            <Routes>
                <Route path="/" element={<Lists refreshTime={refreshTime} />} />

                <Route path="/archived" element={<Archived />} />
                
                <Route path="/shared" element={<Shared />} />

                <Route path="/lists/:listId" element={<ListDetail />} />

                <Route path="/profile" element={<Profile onUnregisterUser={handleLogout} />} />
            </Routes>
        </main>
    </div>
}

export default Home