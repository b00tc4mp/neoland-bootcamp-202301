import { useState, useEffect } from 'react'
import createSticky from '../logic/create-sticky'
import List from '../components/List'
import Profile from '../components/Profile'
import MyList from '../components/MyList'
import retrieveUser from '../logic/retrieve-user'
import Button from '../library/Button'
import Favs from '../components/Favs'
import { useNavigate, Routes, Route, Link, useLocation } from 'react-router-dom'

function Home() {
    console.log('Home -> render')

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

    const handleToggleFav = (userId, stickyId) => {
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

    return <div className="bg-black h-full">
        <header className="fixed top-0 w-full flex justify-between p-2 bg-[black]">
            <Link to="/" className="logo-link" href=""><img className="w-10" src="images/logo.png" alt="Chachi Games" /></Link>

            <nav className="flex items-center gap-5">
                <Link to="/my-list" className="text-[gold] font-odibee underline">My stickies</Link>

                <Link to="/favs" className="text-[gold] font-odibee underline">FAVS</Link>

                <Link to="/profile" className="text-[gold] font-odibee underline">{user.name}</Link>

                <Button onClick={handleLogout}>Logout</Button>
            </nav>
        </header>
        <main className="py-16">
            <Routes>
                <Route path="/" element={<List updateStamp={listUpdateStamp} user={user} onToggleFav={handleToggleFav} />}></Route>
                <Route path="/profile" element={<Profile onUnregisterUser={handleLogout} />} />
                <Route path="/my-list" element={<MyList updateStamp={listUpdateStamp} user={user} onToggleFav={handleToggleFav} />} />
                <Route path="/favs" element={<Favs updateStamp={listUpdateStamp} user={user} onToggleFav={handleToggleFav} />} />
            </Routes>
        </main>
        <footer className="fixed bottom-0 w-full flex justify-center bg-[black]">
            {(location.pathname === '/' || location.pathname === '/my-list') && <Button onClick={handleAdd}>+</Button>}
        </footer>
    </div>
}

export default Home