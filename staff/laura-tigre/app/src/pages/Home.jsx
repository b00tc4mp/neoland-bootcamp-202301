import { useState, useEffect, useContext } from 'react'
import createSticky from '../logic/create-sticky'
import List from '../components/List'
import Profile from '../components/Profile'
import MyList from '../components/MyList'
import MyFavs from '../components/MyFavs'
import UserProfile from '../components/UserProfile'
import retrieveUser from '../logic/retrieve-user'
import { useNavigate, Routes, Route, Link, useLocation } from 'react-router-dom'
import Context from '../Context'

function Home() {

  const {alert}= useContext(Context)

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

  


  return <div className="max-h-md font-['Montserrat']">
    <header className="flex justify-between items-center bg-[#d1d5db] fixed top-0 w-full">
      <Link to="/">
        <img className="w-20" src="images/hello!.png" alt="logo" />
      </Link>
      <nav>
        <Link to="/my-list" className="my-list-link m-3" >My stickies</Link>

        <Link to="/profile" className="profile-link m-3">{user.name}</Link>

        <Link to="my-favs" className="logout-link m-3" >My favorits</Link>


        <button onClick={handleLogout} className="bg-[#facc15] h-7 w-20 m-3">LOGOUT</button>

      </nav>
    </header>

    <main className="py-20 ">

      <Routes>

        <Route path="/" element={<List listUpdateStamp={listUpdateStamp} />} />

        <Route path="profile" element={<Profile onUnregisterUser={handleLogout} />} />

        <Route path="my-list" element={< MyList listUpdateStamp={listUpdateStamp} />} />
        
        <Route path="/users/:userProfileId" element={< UserProfile listUpdateStamp={listUpdateStamp}  />} />


        <Route path="/my-favs" element={< MyFavs listUpdateStamp={listUpdateStamp}/>} />


      </Routes>
    </main>
    <footer className="fixed bottom-0 left-0 flex justify-center bg-[#d1d5db] w-full" >
      {(location.pathname === '/' || location.pathname === '/my-list') && <button onClick={handleAdd} className="text-5xl" >+</button>}
    </footer>
  </div>

}
export default Home