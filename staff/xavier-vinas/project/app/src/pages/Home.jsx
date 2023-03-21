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

    return <div className="m-2 " >
        <header className="" >
            <nav className="flex justify-between items-center p-3 bg-gray-500 " >

                <Link to="/" className="w-20 "><img className="logo" src="./logo.png"></img></Link>

                <div className="flex items-center">

                    <div className="buscador">
                        <input
                            type="text"
                            className="px-4 py-2 rounded-full text-gray-900 bg-gray-300 focus:outline-none focus:shadow-outline"
                            placeholder="Search"
                        />
                    </div>
                </div>

                <Link to="/my-auctions" className="">my auctions</Link>
                <Link to="/profile" className="">{user.name}</Link>            </nav>

        </header>
        <main className="flex flex-col items-center">
            <Routes>
                <Route path="/" element={<List listUpdateStamp={listUpdateStamp} />} />

                <Route path="/profile" element={<Profile />} />

                <Route path="/my-auctions" element={<MyAuction listUpdateStamp={listUpdateStamp} />} />

                <Route path="/new-auction" element={<AuctionForm listUpdateStamp={listUpdateStamp} />} />

                <Route path="/auctions/:auctionId" element={<AuctionDetail listUpdateStamp={listUpdateStamp} />} />
            </Routes>
        </main>

        <footer className="fixed bottom-0 left-0 flex justify-center">

            <Link to={"/new-auction"}>
                add

            </Link>
        </footer>
    </div>
}
export default Home