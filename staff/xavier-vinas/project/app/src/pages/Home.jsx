import { useState, useEffect, useContext } from "react"
import List from "../components/List"
import Profile from "../components/Profile"
import MyAuction from "../components/MyAuctions"
import retrieveUser from "../logic/retrieve-user"
import { Routes, Route, Link } from 'react-router-dom'
import Context from '../Context'
import AuctionForm from "../components/AuctionForm"
import AuctionDetail from "../components/AuctionDetail"



function Home() {
    const { alert } = useContext(Context)


    const [listUpdateStamp, setListUpdateStamp] = useState(Date.now())
    const [user, setUser] = useState({})


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

    return <div className=" bg-gray-200 m-2 border-b   " >
        <header className="" >
            <nav className="flex justify-between items-center p-3 bg-gray-200 border-b border-gray-400 " >

                <Link to="/" className="w-20  border-double border-4  border-black "><img className="logo" src="./logo.png"></img></Link>

                <div className="flex items-center">

                    <div className="buscador">
                        <input
                            type="text"
                            className="px-4 py-2 rounded-full text-gray-900 bg-white focus:outline-none focus:shadow-outline"
                            placeholder="Search"
                        />
                    </div>
                </div>

                <Link to="/my-auctions" className="border-double border-4  border-blac inline-block rounded   px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-700 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-400 dark:hover:bg-opacity-10">my auctions</Link>
                <Link to="/profile" className="border-double border-4  border-blac inline-block rounded   px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-700 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-400 dark:hover:bg-opacity-10">{user.name}</Link>            </nav>

        </header>
        <main className="  ">
            <Routes>
                <Route path="/" element={<List listUpdateStamp={listUpdateStamp} />} />

                <Route path="/profile" element={<Profile />} />

                <Route path="/my-auctions" element={<MyAuction listUpdateStamp={listUpdateStamp} />} />

                <Route path="/new-auction" element={<AuctionForm listUpdateStamp={listUpdateStamp} />} />

                <Route path="/auctions/:auctionId" element={<AuctionDetail listUpdateStamp={listUpdateStamp} />} />
            </Routes>
        </main>

        <footer className="fixed bottom-0 left-0 flex justify-center">

          
        </footer>
    </div>
}
export default Home