import { useState, useEffect } from 'react'
import createSticky from '../logic/create-sticky'
import List from '../components/List'
import Profile from '../components/Profile'
import MyList from '../components/MyList'
import retrieveUser from '../logic/retrieve-user'
import Button from '../library/Button'
import Favs from '../components/Favs'

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

    const handleShowFavs = event => {
        event.preventDefault()
        
        // TODO retrieve favs and render them
        setView('favs')
    }

    return <div className="bg-black h-full">
        <header className="fixed top-0 w-full flex justify-between p-2 bg-[black]">
            <a onClick={handleShowList} className="logo-link" href=""><img className="w-10" src="images/logo.png" alt="Chachi Games" /></a>

            <nav className="flex items-center gap-5">
                <a onClick={handleShowMyList} className="text-[gold] font-odibee underline" href="">My stickies</a>

                <a onClick={handleShowFavs} className="text-[gold] font-odibee underline" href="">FAVS</a>

                <a onClick={handleShowProfile} className="text-[gold] font-odibee underline" href="">{user.name}</a>
                {/* <button onClick={handleLogout} className="logout-button border-[2px] border-[gold] text-[gold] p-1 font-press">Logout</button> */}
                <Button onClick={handleLogout}>Logout</Button>
            </nav>
        </header>
        <main className="py-16">
            {view === 'list' && <List updateStamp={listUpdateStamp} user={user} onToggleFav={handleToggleFav} />}

            {view === 'profile' && <Profile onUnregisterUser={onUnregisterUser} />}

            {view === 'my-list' && <MyList updateStamp={listUpdateStamp} user={user} onToggleFav={handleToggleFav} />}

            {view === 'favs' && <Favs updateStamp={listUpdateStamp} user={user} onToggleFav={handleToggleFav} />}
        </main>
        <footer className="fixed bottom-0 w-full flex justify-center bg-[black]">
            {/* <button onClick={handleAdd} className="logout-button font-press border-[2px] border-[gold] text-[gold] p-1">+</button> */}
            {view !== 'profile' && <Button onClick={handleAdd}>+</Button>}
        </footer>
    </div>
}

export default Home