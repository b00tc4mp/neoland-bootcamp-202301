import { useState, useEffect } from "react"
import createSticky from "../logic/create-sticky"
import List from '../components/List'
import Profile from '../components/Profile'
import MyList from "../components/MyList"
import UserProfile from "../components/UserProfile"
import retrieveUser from "../logic/retrieve-user"
import Favs from "../components/Favs"
import { useNavigate, Routes, Route, Link, useLocation } from 'react-router-dom'

function Home({ onLogout }) {
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
                setUser(user) //se llama a api y nos envia el usuario
            })
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const handleFav = (userId, stickyId) => { //callback que se envia por list a item, list no hace nada solo lo pasa a item que lo va a usar, aqui es una logica para ponerlo o quitarlo visualmente (no en la base de datos - api).
        setUser(user => { //user es parametro, no funcion
            const newUser = { ...user } //creo un nuevo objeto en memoria
            const favs = [...user.favs] //creo un nuevo array con los favoritos del usuario
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
            <Link to="/" className="w-16" href=""><img className="pluma"
                src="https://icons-for-free.com/download-icon-tweet+post+twitter+write+icon-1320196019185766457_512.png"
                alt="Posts"></img>
            </Link>

            <nav className="flex items-center gap-5">
                <Link to="/my-list" className="my-list-link font-montserrat" href="">My stickies</Link>

                <Link to="/profile" className="profile-link font-montserrat" href="">{user.name}</Link>

                <Link to="/favs" className="logout-link m-3" href="">Favs</Link>

                <button onClick={handleLogout} className="bg-purple-300 border-2 rounded-md text-white w-20 drop-shadow-sm font-montserrat">Logout</button>
            </nav>
        </header>

        <main className="py-20">
            <Routes>
                <Route path="/" element=
                    {<List listUpdateStamp={listUpdateStamp} user={user} onToggleFav={handleFav} />}></Route>

                <Route path="/profile" element={<Profile onUnregisterUser={handleLogout} />} />

                <Route path="/my-list" element={<MyList listUpdateStamp={listUpdateStamp} user={user} onToggleFav={handleFav} />} />

                <Route path="/favs" element={<Favs listUpdateStamp={listUpdateStamp} onToggleFav={handleFav} user={user} />} />

                <Route path="/users/:userProfileId" element={<UserProfile listUpdateStamp={listUpdateStamp} />} />
            </Routes>
        </main>

        <footer className="fixed bottom-0 left-0 flex justify-center bg-purple-300 border-2 rounded-md text-white w-full" >
            {(location.pathname === '/' || location.pathname === '/my-list') && <button className="drop-shadow-sm text-5xl" onClick={handleAdd}>+</button>}
        </footer>
    </div>
}

export default Home