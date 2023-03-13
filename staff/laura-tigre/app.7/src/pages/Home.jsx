import { useState, useEffect } from 'react'
import createSticky from '../logic/create-sticky'
import List from '../components/List'
import Profile from '../components/Profile'
import MyList from '../components/MyList'
import MyFavs from '../components/MyFavs'
import retrieveUser from '../logic/retrieve-user'

function Home({onLogout}) {
  // console.log( 'Home -> render')
  const [view, setView] = useState('list')
  const [listUpdateStamp, setListUpdateStamp] = useState(Date.now())
  const [user, setUser] = useState({})


  const handleShowProfile = event => {
    event.preventDefault()

    setView('profile')
  }
  const handleShowMyList = event => {
    event.preventDefault()

    setView('my-list')
  }

  const handleShowList = event => {
    event.preventDefault()
    setView('list')
  }

  const handleShowMyFavs = event => {
    event.preventDefault()
    setView('my-favs')
  }

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
    onLogout()
  }
  

  useEffect(()=>{
    try {
      retrieveUser(sessionStorage.token, (error, user)=>{
        if(error){
          alert(error.message)
          return
        }
        setUser(user)
      })
      
    } catch (error) {
      alert(error.message)
    }
  },[])

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


  return <div className="max-h-md font-['Montserrat']">
    <header className="flex justify-between items-center bg-[#d1d5db] fixed top-0 w-full">
      <a onClick={handleShowList} href="">
        <img className="w-20" src="images/hello!.png" alt="logo" />
      </a>
      <nav>
        <a onClick={handleShowMyList} className="my-list-link m-3" href="">My stickies</a>
        <a onClick={handleShowProfile} className="profile-link m-3" href="">{user.name}</a>
        < a onClick={handleShowMyFavs} className="logout-link m-3" href="">My favorits</a>
        <button onClick={handleLogout} className="bg-[#facc15] h-7 w-20 m-3">LOGOUT</button>

      </nav>
    </header>

    <main className="py-20 ">
      {view === 'list' && <List listUpdateStamp={listUpdateStamp} onToggleFav={handleToggleFav} user={user}/>}

      {view === 'profile' && <Profile onUnregisterUser={handleLogout} />}

      {view === 'my-list' && <MyList listUpdateStamp={listUpdateStamp} onToggleFav={handleToggleFav} user={user}/>}

      {view ==='my-favs' && <MyFavs listUpdateStamp={listUpdateStamp} onToggleFav={handleToggleFav} user={user}/>}

    </main>
    <footer className="fixed bottom-0 left-0 flex justify-center bg-[#d1d5db] w-full" >
      {view!== 'profile'&& view !== 'my-favs' && <button onClick={handleAdd} className="text-5xl" >+</button>}
    </footer>
  </div>

}
export default Home