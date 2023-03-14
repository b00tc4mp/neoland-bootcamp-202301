import { useState, useEffect, useContext } from 'react'
import { useNavigate, Routes, Route, Link, useLocation } from 'react-router-dom'
import Context from '../Context'
import retrieveUser from '../logic/retrieve-user'
import createContract from '../logic/create-contract'
import Button from '../library/Button'
import Container from '../library/Container'
import Header from '../components/Header'
import Profile from '../components/Profile'

function Home() {
    console.log('Home -> render')

    const { alert } = useContext(Context)

    const navigate = useNavigate()
    const location = useLocation()

    const [listUpdateStamp, setListUpdateStamp] = useState(Date.now())
    const [user, setUser] = useState({})

    const handleAdd = () => {
        try {

        } catch (error) {
            alert(error.message)
        }
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
        <header>
            <Header />
        </header>

        <main>
            <Profile />

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
            <Button onClick={handleAdd}>+</Button>
        </footer>
    </Container>
}

export default Home