import { useState, useEffect } from 'react'
import createSticky from '../logic/create-sticky'
import List from '../components/List'
import Profile from '../components/Profile'
import MyList from '../components/MyList'
import retrieveUser from '../logic/retrieve-user'
import Button from '../library/Button'
import Container from '../library/Container'

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

    return <div className="bg-white h-screen">
        <header className="flex justify-between p-2 bg-white fixed top-0 left-0 w-full">
            <a onClick={handleShowList} className="logo-link" href=""><img className="w-16" src="images/mylogo.png" alt="logo" /></a>

            <nav className="flex items-center gap-2">
                <a onClick={handleShowMyList} className="text-gray-500 hover:underline cursor-pointer font-quicksand" href="">My stickies</a>
                <a onClick={handleShowProfile} className="text-gray-500 hover:underline cursor-pointer font-quicksand" href="">{user.name}</a>
                <button onClick={handleLogout} className="bg-blue-600 text-white font-quicksand border border-gray-400 p-1 rounded-md pointer">Logout</button>
            </nav>
        </header>

        <main className="bg-blue-50 py-20 min-h-screen">
            {view === 'list' && <List listUpdateStamp={listUpdateStamp} />}

            {view === 'profile' && <Profile onUnregisterUser={handleLogout} />}

            {view === 'my-list' && <MyList listUpdateStamp={listUpdateStamp} />}
        </main>

        <footer className="bg-white flex justify-center items-center fixed bottom-0 left-0 w-full">
            {view !== 'profile' && <Button onClick={handleAdd}>+</Button>}
        </footer>
    </div>
}

export default Home