function Home(props) {
    const [view, setView] = React.useState("list")
    const [listUpdateStamp, setListUpdateStamp] = React.useState(Date.now())


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
            createSticky(sessionStorage.userId, "", "public")
            setListUpdateStamp(Date.now())
        } catch (error) {
            alert(error.message)
        }
    }
    const handleLogout = () => {
        delete sessionStorage.userId

        props.onLogout()
    }

    return <div className="w-full" >
        <header className=" " >

            <nav className="px-8 flex justify-between  flex items-center gap-5 bg-slate-400 w-full " >
                <a onClick={handleShowList} className="logo-link" href=""><img className="logo" src="https://cdn-icons-png.flaticon.com/128/431/431249.png" alt=""></img></a>
                <a onClick={handleShowMyList} className="text-2xl font-black  underline" href="">My Stickies</a>
                <a onClick={handleShowProfile} className="text-2xl font-black  underline" href="">Profile</a>
                <button onClick={handleLogout} className="border-[2px] border-[black] text-[black] p-3 rounded-full text-2xl">logout</button>

            </nav>

        </header>

        <main className="home-main">

            {view === "list" && <List listUpdateStamp={listUpdateStamp} />}

            {view === "profile" && <Profile />}

            {view === "my-list" && <MyList />}
        </main>

        <footer className="fixed w-full  ">

            <button onClick={handleAdd} className="add-b bg-slate-400 w-full  h-24 border-[2px] border-[black] text-[black] ">Add Sticky</button>
        </footer>

    </div>
}