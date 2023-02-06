function Home(props) {
    console.log('Home -> render')

    const [view, setView] = React.useState('list')
    const [listUpdateStamp, setListUpdateStamp] = React.useState(Date.now())
    // const (updateText, setUpdateText) = React.useState('')

    const handleShowProfile = event => {
        event.preventDefault()

        setView('profile')
    }

    const handleShowList = event => {
        event.preventDefault()

        setView('list')
    }

    const handleShowMyList = event => {
        event.preventDefault()

        setView('my-list')
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

    return <div className="home-view">
        <header>
            <a onClick={handleShowList} className="logo-link" href=""><img className="logo" src="images/mylogo.png" alt="logo" /></a>

            <nav className="header-nav">
                <a onClick={handleShowMyList} className="my-list-link" href="">My stickies</a>
                <a onClick={handleShowProfile} className="profile-link" href="">Profile</a>
                <button onClick={handleLogout} className="logout-button">Logout</button>
            </nav>
        </header>

        <main className="home-main">
            {view === 'list' && <List updateStamp={listUpdateStamp} />}

            {view === 'profile' && <Profile />}

            {view === 'my-list' && <MyList updateStamp={listUpdateStamp} />}
        </main>
        
        <footer>
            <button onClick={handleAdd} className="add-button">+</button>
        </footer>
    </div>
}