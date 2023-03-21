import { useState, useEffect, useContext } from 'react'
import retrieveUser from '../logic/retrieve-user'
import { useNavigate, Routes, Route, Link } from 'react-router-dom'
import Context from '../Context'
import Container from '../library/Container'
import ParentsList from '../components/ParentsList'
import FavoritesNannies from '../components/FavoritesNannies'
import NanniesList from '../components/NanniesList'
import NannyProfile from '../components/NannyProfile'
import ParentProfile from '../components/ParentProfile'
import ProfileUserNanny from '../components/ProfileUserNanny'
import SearchNannies from '../components/SearchNannies'
import SearchParents from '../components/SearchParents'
import { MagnifyingGlassIcon, HeartIcon, UserCircleIcon, HomeIcon } from '@heroicons/react/24/outline'



function Home() {
  console.log('Home ->render')

  const { alert } = useContext(Context)
  const navigate = useNavigate()
  const [listUpdateStamp, setListUpdateStamp] = useState(Date.now())
  const [user, setUser] = useState({})
  const [nannies, setNannies] = useState([])




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

  const handleLogout = () => {
    delete sessionStorage.token
    navigate('/login')
  }

  const handleToggleFavNanny = (nannyId) => {
    setNannies(nannies => {
      const index = nannies.findIndex(nanny => nanny.id === nannyId)
      const nanny = nannies[index]
      const nannyUpdated = { ...nanny }

      nannyUpdated.fav = !nannyUpdated.fav

      const nanniesUpdated = [...nannies]

      nanniesUpdated[index] = nannyUpdated

      return nanniesUpdated
    })
    

  }






  return <Container className="font-['Poppins'] h-full bg-[#f5f5f4]">
    {user.role === 'nanny' && <><header className='flex flex-row'>
      <Link to="/">
        <img src="images/kangaroo.png" alt="kangaroo" className="w-14 h-14 bg-[#fb923c] rounded-full p-1 m-2" />
      </Link>
      <h1 className='flex flex-col justify-center text-[#fb923c]' >NANNY KANGAROO</h1>
    </header>
      <main>
        <Routes>

          <Route path="/" element={<ParentsList listUpdateStamp={listUpdateStamp} />} />
          <Route path="/parents/:parentId" element={< ParentProfile />} />
          <Route path="/nannyProfile" element={<ProfileUserNanny />} />
          <Route path="/search/parents" element={<SearchParents listUpdateStamp={listUpdateStamp} />} />
        </Routes>


      </main>
      <footer className="sm: w-full position fixed bottom-0 bg-[#d6d3d1] rounded-md">
        <nav className='flex justify-between'>
          <Link to="/" className="m-3" ><HomeIcon className="h-8 w-8 text-[#fb923c]" /></Link>


          <Link to="/search/parents" className="m-3" ><MagnifyingGlassIcon className="h-8 w-8 text-[#fb923c]" /></Link>

          <Link to="/my-favs" className=" m-3"><HeartIcon className="h-8 w-8 text-[#fb923c]" /></Link>

          <Link to="/nannyprofile" className="m-3" ><UserCircleIcon className="h-8 w-8 text-[#fb923c]" /></Link>


          <button onClick={handleLogout} className="bg-[#fb923c] h-7 w-20 m-3 text-white">LOGOUT</button>
        </nav>

      </footer></>

    }
    {user.role === 'parent' && <> <header className='flex flex-row justify-between'>
      <Link to="/">
        <img src="images/kangaroo.png" alt="kangaroo" className="w-14 h-14 bg-[#fb923c] rounded-full p-1 m-2" />
      </Link>
      <h1 className='flex flex-col justify-center text-[#fb923c]'>FAMILY KANGAROO</h1>
    </header>
      <main>
        <Routes>

          <Route path="/" element={<NanniesList listUpdateStamp={listUpdateStamp} onToggleFavNanny={handleToggleFavNanny} />} />

          <Route path="/search/nannies" element={<SearchNannies listUpdateStamp={listUpdateStamp} />} />

          <Route path="/nannies/:nannyId" element={< NannyProfile />} />
          <Route path="/nannies/favs" element={<FavoritesNannies listUpdateStamp={listUpdateStamp}/>} />
          

        </Routes>

      </main>
      <footer className="sm: w-full position fixed bottom-0 bg-[#d6d3d1] rounded-md">
        <nav className='flex justify-between'>
          <Link to="/" className="m-3" ><HomeIcon className="h-8 w-8 text-[#fb923c]" /></Link>

          <Link to="/search/nannies" className="m-3" ><MagnifyingGlassIcon className="h-8 w-8 text-[#fb923c]" /></Link>

          <Link to="/nannies/favs" className="m-3" ><HeartIcon className="h-8 w-8 text-[#fb923c]" /></Link>

          <Link to="/profile" className=" m-3"><UserCircleIcon className="h-8 w-8 text-[#fb923c]" /></Link>

          <button onClick={handleLogout} className="bg-[#fb923c] h-7 w-20 m-3 text-white rounded-md">LOGOUT</button>
        </nav>

      </footer></>

    }

  </Container>


}
export default Home