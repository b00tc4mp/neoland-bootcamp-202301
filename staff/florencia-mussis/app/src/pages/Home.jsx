import { useState, useEffect } from "react"
import createSticky from "../logic/create-sticky"
import List from '../components/List'
import Profile from '../components/Profile'
import MyList from "../components/MyList"
import retrieveUser from "../logic/retrieve-user"
import MyFavs from "../components/Myfavs"


function Home({onLogout, onUnregisterUser}) {
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

    const handleShowMyFavs = event => {
        event.preventDefault()
        setView('my-favs')
      }

    const handleLogout = () => {
        delete sessionStorage.userId

        onLogout()
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

    const handleFav = (userId, stickyId) => {
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

    return <div className="max-h-md font-['Montserrat']">
        <header className="fixed w-full flex justify-between p-2 bg-purple-300">
            <a onClick={handleShowList} className="w-16" href=""><img className="pluma"
                src="https://icons-for-free.com/download-icon-tweet+post+twitter+write+icon-1320196019185766457_512.png"
                alt="Posts"></img>
            </a>

            <nav className="flex items-center gap-5">
                <a onClick={handleShowMyList} className="my-list-link font-montserrat" href="">My stickies</a>

                <a onClick={handleShowProfile} className="profile-link font-montserrat" href="">{user.name}</a>

                <a onClick={handleShowMyFavs} className="logout-link m-3" href="">My favorits</a>

                <button onClick={handleLogout} className="bg-purple-300 border-2 rounded-md text-white w-20 drop-shadow-sm font-montserrat">Logout</button>
            </nav>
        </header>

        <main className="py-20">
            {view === 'list' && <List listUpdateStamp={listUpdateStamp} user={user} onToggleFav={handleFav} />}

            {view === 'profile' && <Profile onUnregisterUser={onUnregisterUser} />}

            {view === 'my-list' && <MyList listUpdateStamp={listUpdateStamp} user={user} onToggleFav={handleFav} />}

            {view ==='my-favs' && <MyFavs listUpdateStamp={listUpdateStamp} handleToggleFav={handleFav} user={user}/>}
        </main>

        <footer className="fixed bottom-0 left-0 flex justify-center bg-purple-300 border-2 rounded-md text-white w-full" >
            {view !== 'profile' && <button className="drop-shadow-sm text-5xl" onClick={handleAdd}>+</button>}
        </footer>
    </div>
}

 export default Home