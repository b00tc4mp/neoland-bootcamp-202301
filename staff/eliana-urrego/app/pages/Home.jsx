function Home(props) {
    console.log('Home -> render')

    const [view, setView] = React.useState('list')
    const [listUpdateStamp, setListUpdateStamp] = React.useState(Date.now())

    const handleShowProfile = event => {
        event.preventDefault()

        setView('profile')
    }
    const handleShowMyList= event=>{
        event.preventDefault()
    
        setView('my-list')
      }

    const handleShowList = event => {
        event.preventDefault()

        setView('list')
    }

    const handleAdd = () => {
        try {
            createSticky(sessionStorage.email, '', 'public')
            setListUpdateStamp(Date.now())
        } catch (error) {
            alert(error.message)
        }
    }

    const handleLogout = () => {
        delete sessionStorage.email
        props.onLogout()
    }

    return <div className=" max-h-md bg-[lightgrey] h-screen">
        <header className=" w-full flex justify-between p-3 font-['Merriweather']">
            <nav className=" w-full flex items-center gap-3 bg-[#DB4704] max-width:100%">
                <a onClick={handleShowList} className="logo-link" href="">
                    <img className="w-12" src="https://cdn-icons-png.flaticon.com/512/2767/2767812.png" alt="company logo" />
                </a>
                <a onClick={handleShowMyList} className="text-white underline m-3" href="">My List</a>

                <a onClick={handleShowProfile} className="text-white underline m-3" href="">Profile</a>
                
                <button onClick={handleLogout} className="logout-button font-['Merriweather'] border-[2px] border-[#528AAE] text-white p-1">Logout</button>
            </nav>
        </header>
        <main className="home-main">
            {view === 'list' && <List listUpdateStamp={listUpdateStamp} />}

            {view === 'profile' && <Profile />}

            {view === 'my-list' && <MyList />}

        </main>
        <footer className="fixed bottom-0 left-0 w-full bg-[#528AAE] flex flex-col items-center h-16 ">
            <button onClick={handleAdd} className="bg-[#DB4704] font-['Merriweather'] border-[2px] border-radious:0.5rem border-[#528AAE] rounded text-white p-1 ">new sticky</button>
        </footer>
    </div>
}