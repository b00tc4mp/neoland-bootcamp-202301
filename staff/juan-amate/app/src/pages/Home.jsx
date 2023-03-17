import { useState, useEffect, useContext } from 'react'
import createSticky from '../logic/create-sticky'
import List from '../components/List'
import Profile from '../components/Profile'
import MyList from '../components/MyList'
import retrieveUser from '../logic/retrieve-user'
import Button from '../library/Button'
import Container from '../library/Container'
import Favs from '../components/Favs'
import { SquaresPlusIcon } from '@heroicons/react/24/solid'
import { useNavigate, Routes, Route, Link, useLocation } from 'react-router-dom'
import Context from '../Context'

function Home() {
    console.log('Home -> render')

    const { alert } = useContext(Context)

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

    return <Container className="h-screen bg-blue-50">
        <header className="flex justify-between p-2 bg-white fixed top-0 left-0 w-full">
            <Link to='/'><SquaresPlusIcon className="h-16 text-blue-500 cursor-pointer" /></Link>

            <nav className="flex items-center gap-2">
                <Link to='/my-list' className="text-gray-500 hover:underline cursor-pointer font-quicksand">.:My stickies:.</Link>

                <Link to='/favs' className="text-gray-500 hover:underline cursor-pointer font-quicksand" href=''>.:My favs:.</Link>

                <Link to='/profile' className="text-gray-500 hover:underline cursor-pointer font-quicksand">.:{user.name}:.</Link>

                <Button onClick={handleLogout} >Logout</Button>
            </nav>
        </header>
        <main>
            <Container className="bg-blue-50 w-full py-20">
                <Routes>
                    <Route path='/' element={<List listUpdateStamp={listUpdateStamp} />} />
                    <Route path='profile' element={<Profile onUnregisterUser={handleLogout} />} />
                    <Route path='/my-list' element={<MyList listUpdateStamp={listUpdateStamp} />} />
                    <Route path='/favs' element={<Favs listUpdateStamp={listUpdateStamp} />} />
                </Routes>
            </Container>
        </main>
        <footer className="bg-white flex justify-center items-center fixed h-14 bottom-0 left-0 w-full">
            {(location.pathname === '/' || location.pathname === '/my-list') && <Button onClick={handleAdd}>+</Button>}
        </footer>
    </Container>
}

export default Home