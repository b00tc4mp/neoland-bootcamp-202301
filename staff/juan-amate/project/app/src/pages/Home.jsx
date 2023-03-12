import { useState, useEffect, useContext } from 'react'
import { useNavigate, Routes, Route, Link, useLocation } from 'react-router-dom'
import Context from '../Context'
import retrieveUser from '../logic/retrieve-user'
import Button from '../library/Button'
import Container from '../library/Container'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

function Home() {
    console.log('Home -> render')

    const { alert } = useContext(Context)

    const navigate = useNavigate()
    const location = useLocation()

    const [listUpdateStamp, setListUpdateStamp] = useState(Date.now())
    const [user, setUser] = useState({})

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

    return <Container className="h-screen">
        <header className="flex justify-between px-2 pt-6 bg-white fixed top-0 left-0 w-full">
            <div className='flex p-2'>
                <Link to='/'><Bars3Icon className="h-8 mt-2 mr-3 cursor-pointer" /></Link>
                <img src='../../images/logo-web.png' />
            </div>

            <Link to='/'><MagnifyingGlassIcon className='h-8 mt-4 mr-2 cursor-pointer' /></Link>
        </header>
        <main>
            <Button onClick={handleLogout} >Logout</Button>
            <Container>

                <Routes>

                    {/* <Route path='/' element={<List listUpdateStamp={listUpdateStamp} />} />

                    <Route path='profile' element={<Profile onUnregisterUser={handleLogout} />} />

                    <Route path='/my-list' element={<MyList listUpdateStamp={listUpdateStamp} />} />

                    <Route path='/favs' element={<Favs listUpdateStamp={listUpdateStamp} />} /> */}

                </Routes>

            </Container>
        </main>
        <footer className="bg-trasnparent flex justify-end items-center m-4 fixed h-14 bottom-0 right-0 w-full">
            <Button>+</Button>
        </footer>
    </Container>
}

export default Home