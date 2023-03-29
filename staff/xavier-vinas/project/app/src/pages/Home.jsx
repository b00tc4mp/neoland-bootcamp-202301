import { useState, useEffect, useContext } from "react"
import List from "../components/List"
import Profile from "../components/Profile"
import MyAuction from "../components/MyAuctions"
import retrieveUser from "../logic/retrieve-user"
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Context from '../Context'
import AuctionForm from "../components/AuctionForm"
import AuctionDetail from "../components/AuctionDetail"
import { Bars3Icon } from '@heroicons/react/24/solid'
import { XMarkIcon } from '@heroicons/react/24/solid'
import Button from "../library/Button"



function Home() {
    const { alert } = useContext(Context)

    const [showNav, setShowNav] = useState(false)
    const [listUpdateStamp, setListUpdateStamp] = useState(Date.now())
    const [user, setUser] = useState({})
    const navigate = useNavigate()

    const handleClick = () => {
        setShowNav(!showNav)

    }
    const handleNavigateToHome = event => {
        event.preventDefault()

        setListUpdateStamp(Date.now())
        navigate('/')
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

    useEffect(() => {

    })

    return <div className="sm: bg-gray-200  border-b font-['Montserrat']   " >
        <header className=" top-0 w-full justify-between flex p-2 shadow bg-gray-200 py-5 z-50">
            <a className="w-16" onClick={handleNavigateToHome}><img className="border-double border-4 rounded-md shadow-inner  border-black" src="./logo.png" /></a>
            <button onClick={handleClick} className='mx-3 text-center '>
                {showNav ? <XMarkIcon className='mt-8 h-8 w-8' /> : <Bars3Icon className='h-8 w-8' />}
            </button>

            {showNav &&
                <div onClick={handleClick} className="  w-full h-full fixed">
                    <ul className='flex flex-col   items-center bg-gray-400 fixed top-24 text-white text-xl mt-2 py-4  w-52 gap-y-8 rounded right-0'>
                        <Link to="/my-auctions" className="border-double border-4  border-blac inline-block rounded   px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-700 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-400 dark:hover:bg-opacity-10">my auctions</Link>
                        <Link to="/profile" className="border-double border-4  border-blac inline-block rounded   px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-700 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-400 dark:hover:bg-opacity-10">{user.name}</Link>
                        <Button onClick={handleLogout} className="w-24 text-sm h-7 rounded-md sm: ">LOGOUT</Button>
                    </ul>
                </div>
            }

        </header >
        <main className=" sm: ">
            <Routes>
                <Route path="/" element={<List listUpdateStamp={listUpdateStamp} />} />

                <Route path="/profile" element={<Profile user={user} onUnregisterUser={handleLogout}  />} />

                <Route path="/my-auctions"  element={<MyAuction listUpdateStamp={listUpdateStamp} />} />

                <Route path="/new-auction" element={<AuctionForm listUpdateStamp={listUpdateStamp} />} />

                <Route path="/auctions/:auctionId" element={<AuctionDetail listUpdateStamp={listUpdateStamp} />} />
            </Routes>
        </main>

        <footer className="fixed bottom-0 left-0 flex justify-center">


        </footer>
    </div >
}
export default Home