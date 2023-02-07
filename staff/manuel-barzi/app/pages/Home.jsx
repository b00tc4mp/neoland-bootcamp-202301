function Home(props) {
    console.log('Home -> render')
    
    const [view, setView] = React.useState('list')
    const [listUpdateStamp, setListUpdateStamp] = React.useState(Date.now())

    const handleShowProfile = event => {
        event.preventDefault()

        setView('profile')
    }

    const handleShowList = event => {
        event.preventDefault()

        setView('list')
    }

    const handleAdd = () => {
        try {
            createSticky(sessionStorage.email, '', 'public')

            setListUpdateStamp(Date.now())
        } catch(error) {
            alert(error.message)
        }
    }

    const handleLogout = () => {
        delete sessionStorage.email

        props.onLogout()
    }

    const handleShowMyList = event => {
        event.preventDefault()

        setView('my-list')
    }

    return <div className="bg-black h-screen">
        <header className="flex justify-between p-2">
            <a onClick={handleShowList} className="logo-link" href=""><img className="w-10" src="images/logo.png" alt="Chachi Games" /></a>

            <nav className="flex items-center gap-5">
                <a onClick={handleShowMyList} className="text-[gold] font-['Odibee_Sans'] underline" href="">My stickies</a>
                <a onClick={handleShowProfile} className="text-[gold] font-['Odibee_Sans'] underline" href="">Profile</a>
                <button onClick={handleLogout} className="logout-button font-['Press_Start_2P'] border-[2px] border-[gold] text-[gold] p-1">Logout</button>
            </nav>
        </header>
        <main className="home-main">
            {view === 'list' && <List updateStamp={listUpdateStamp} />}

            {view === 'profile' && <Profile />}

            {view === 'my-list' && <MyList />}
        </main>
        <footer>
            <button onClick={handleAdd} className="add-button">+</button>
        </footer>
    </div>
}