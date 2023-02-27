import { useState, useEffect } from "react"
import createSticky from "../logic/create-sticky"
import List from '../components/List'
import Profile from '../components/Profile'
import MyList from "../components/MyList"
import retrieveUser from "../logic/retrieve-user"

function Home(props) {
    console.log('Home -> render')

    const [view, setView] = useState('list')
    const [listUpdateStamp, setListUpdateStamp] = useState(Date.now()) //cuando necesitamos que se actualice y pinte, lo asociamos a date now
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

    const handleShowMyList = event => {
        event.preventDefault()

        setView('my-list')
    }

    const handleLogout = () => {
        delete sessionStorage.userId

        props.onLogout()
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
        } catch(error) {
            alert(error.message)
        }
    }, [])

    return <div className="max-h-md font-['Montserrat']">
        <header className="fixed w-full flex justify-between p-2 bg-purple-300">
            <a onClick={handleShowList} className="w-16" href=""><img className="pluma"
                src="https://icons-for-free.com/download-icon-tweet+post+twitter+write+icon-1320196019185766457_512.png"
                alt="Posts"></img>
            </a>

            <nav className="flex items-center gap-5">
                <a onClick={handleShowMyList} className="my-list-link font-montserrat" href="">My stickies</a>
                <a onClick={handleShowProfile} className="profile-link font-montserrat" href="">{user.name}</a>
                <button onClick={handleLogout} className="bg-purple-300 border-2 rounded-md text-white w-20 drop-shadow-sm font-montserrat">Logout</button>
            </nav>
        </header>

        <main className="flex flex-col items-center">
            {view === 'list' && <List listUpdateStamp={listUpdateStamp} />}

            {view === 'profile' && <Profile onUnregisterUser={handleLogout} />}

            {view === 'my-list' && <MyList listUpdateStamp={listUpdateStamp} />}
        </main>

        <footer className="fixed bottom-0 left-0 flex justify-center bg-purple-300 border-2 rounded-md text-white w-full" >
            <button className="drop-shadow-sm text-5xl" onClick={handleAdd} >+</button>
        </footer>
    </div>
}

 export default Home