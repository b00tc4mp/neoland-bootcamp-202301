import { useState,useEffect } from "react"
import createSticky from "../logic/create-sticky"
import List from "../components/List"
import Profile from "../components/Profile"
import MyList from "../components/MyList"
import retrieveUser from "../logic/retrieve-user"


function Home(props) {
    const [view, setView] = useState("list")
    const [listUpdateStamp, setListUpdateStamp] = useState(Date.now())
    const [user, setUser] = useState({})



    const handleShowProfile = event => {
        event.preventDefault()
        setView("profile")
    }

    const handleShowMyList = event => {
        event.preventDefault()

        setView("my-list")

    }



    const handleShowList = event => {
        event.preventDefault()
        setView('list')
    }

    const handleAdd = () => {

        try {
            createSticky(sessionStorage.userId, "", "public", error => {
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
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const onNavigateToLogin = () => {
        props.onUnregisterUser()

    }


    return <div className="max-h-md" >
        <header className="" >

            <nav className="flex justify-between items-center " >
                <a onClick={handleShowList} className="logo-link" href=""><img className="logo" src="https://cdn-icons-png.flaticon.com/128/431/431249.png" alt=""></img></a>
                <a onClick={handleShowMyList} className="text-2xl font-black  underline" href="">My Stickies</a>
                <a onClick={handleShowProfile} className="text-2xl font-black  underline" href="">{user.name}</a>
                <button onClick={handleLogout} className="border-[2px] border-[black] text-[black] p-3 rounded-full text-2xl">logout</button>

            </nav>

        </header>

        <main className="flex flex-col items-center">

            {view === "list" && <List listUpdateStamp={listUpdateStamp} />}

            {view === "profile" && <Profile onNavigateToLogin ={onNavigateToLogin} />}

            {view === "my-list" && <MyList listUpdateStamp={listUpdateStamp} />}
        </main>

        <footer className=" border-double border-4 fixed bottom-0 left-0 flex justify-center bg-[#d1d5db] w-full  ">

            <button className="border-double border-4" onClick={handleAdd}>Add Sticky</button>
        </footer>

    </div>

}
export default Home
