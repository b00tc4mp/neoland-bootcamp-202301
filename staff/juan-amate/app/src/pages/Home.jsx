import { useState, useEffect } from 'react'
import createSticky from '../logic/create-sticky'
import List from '../components/List'
import Profile from '../components/Profile'
import MyList from '../components/MyList'
import retrieveUser from '../logic/retrieve-user'
import Button from '../library/Button'
import Container from '../library/Container'
import MyFavs from '../components/MyFavs'
import { SquaresPlusIcon } from '@heroicons/react/24/solid'

function Home({ onLogout, onUnregisterUser }) {
    console.log('Home -> render')

    const [view, setView] = useState('list')
    const [listUpdateStamp, setListUpdateStamp] = useState(Date.now())
    const [user, setUser] = useState({})

    const handleShowProfile = event => {
        event.preventDefault()

        setView('profile')
    }

    const handleShowList = event => {
        event.preventDefault()

        setView('list')
    }

    const handleAdd = () => {
        try {
            createSticky(sessionStorage.userId, '', 'public', error => {
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
        delete sessionStorage.userId

        onLogout()
    }

    const handleShowMyList = event => {
        event.preventDefault()

        setView('my-list')
    }

    const handleShowMyFavs = event => {
        event.preventDefault()

        setView('my-favs')
    }

    const handleToggleFavs = (userId, stickyId) => {
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

    useEffect(() => {
        try {
            retrieveUser(sessionStorage.userId, (error, user) => {
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
            <SquaresPlusIcon onClick={handleShowList} className="h-16 text-blue-500 cursor-pointer" />

            <nav className="flex items-center gap-2">
                <a onClick={handleShowMyList} className="text-gray-500 hover:underline cursor-pointer font-quicksand" href=''>.:My stickies:.</a>

                <a onClick={handleShowMyFavs} className="text-gray-500 hover:underline cursor-pointer font-quicksand" href=''>.:My favs:.</a>

                <a onClick={handleShowProfile} className="text-gray-500 hover:underline cursor-pointer font-quicksand" href="">.:{user.name}:.</a>

                <Button onClick={handleLogout} >Logout</Button>
            </nav>
        </header>

        <Container className="bg-blue-50 w-full py-20">
            {view === 'list' && <List listUpdateStamp={listUpdateStamp} user={user} onToggleFavs={handleToggleFavs} />}

            {view === 'profile' && <Profile onUnregisterUser={onUnregisterUser} />}

            {view === 'my-list' && <MyList listUpdateStamp={listUpdateStamp} user={user} onToggleFavs={handleToggleFavs} />}

            {view === 'my-favs' && <MyFavs listUpdateStamp={listUpdateStamp} />}
        </Container>

        <footer className="bg-white flex justify-center items-center fixed h-14 bottom-0 left-0 w-full">
            {view !== 'profile' && <Button onClick={handleAdd}>+</Button>}
        </footer>
    </Container>
}

export default Home