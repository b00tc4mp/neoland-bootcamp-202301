import { useState, useEffect } from "react"
import createSticky from "../logic/create-sticky"
import List from "../components/List"
import Profile from "../components/Profile"
import MyList from "../components/MyList"
import UserProfile from "../components/UserProfile"
import retrieveUser from "../logic/retrieve-user"
import Button from "../library/Button"
import MyFavs from "../components/MyFavs"
import { useNavigate, Routes, Route, Link, useLocation } from 'react-router-dom'


function Home() {
    const navigate = useNavigate()
    const location = useLocation()


    const [listUpdateStamp, setListUpdateStamp] = useState(Date.now())
    const [user, setUser] = useState({})


    const handleAdd = () => {
        try {
            createSticky(sessionStorage.token, '', 'public', error => {
                if (error) {
                    alert(error.message)

                    return
                }

                setListUpdateStamp(Date.now())
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleLogout = () => {
        delete sessionStorage.token

        navigate('/login')
    }

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

    const handleToggleFav = (token, stickyId) => {
        setUser(user => {
            const newUser = { ...user }
            const favs = [...user.favs]
            newUser.favs = favs

            const indexOfSticky = favs.indexOf(stickyId)

            if (indexOfSticky < 0)
                favs.push(stickyId)
            else
                favs.splice(indexOfSticky, 1)

            return newUser
        })
    }


    return <div className="max-h-md" >
        <header className="" >

            <nav className="flex justify-between items-center " >
                <Link to="/" className="logo-link"><img className="logo" src="https://cdn-icons-png.flaticon.com/128/431/431249.png"></img></Link>
                <Link to="/my-list" className="text-2xl font-black  underline">My Stickies</Link>
                <Link to="/my-favs" className="text-2xl font-black  underline">My favorits</Link>
                <Link to="/profile" className="text-2xl font-black  underline">{user.name}</Link>
                <Button onClick={handleLogout}>Logout</Button>

            </nav>

        </header>

        <main className="flex flex-col items-center">
            <Routes>
                <Route path="/" element={<List listUpdateStamp={listUpdateStamp} user={user} onToggleFav={handleToggleFav} />} />

                <Route path="/profile" element={<Profile onUnregisterUser={handleLogout} />} />

                <Route path="/my-list" element={<MyList listUpdateStamp={listUpdateStamp} user={user} onToggleFav={handleToggleFav} />} />

                <Route path="/my-favs" element={<MyFavs listUpdateStamp={listUpdateStamp} onToggleFav={handleToggleFav} user={user} />} />

                <Route path="/users/:userProfileId" element={<UserProfile listUpdateStamp={listUpdateStamp} />} />


            </Routes>
        </main>

        <footer className=" border-double border-4 fixed bottom-0 left-0 flex justify-center bg-[#d1d5db] w-full  ">

            {(location.pathname === '/' || location.pathname === '/my-list') && <Button onClick={handleAdd}>+</Button>}
        </footer>

    </div>

}
export default Home
