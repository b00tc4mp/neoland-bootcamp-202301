function Home() {
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

    const handleAdd = () => {
        try {
            createSticky(sessionStorage.email, '', 'public')

            setListUpdateStamp(Date.now())
        } catch(error) {
            alert(error.message)
        }
    }

    // let stickies

    // stickies = retrieveStickies()
    // stickies.map(sticky)

    // const handleUpdateText = event => {
    //     event.preventDefault()

    //     try {
    //         updateStickyText(sessionStorage.email, sticky.id, '')

    //         setListUpdateStamp(Date.now())
    //     } catch(error) {
    //         alert(error.message)
    // }

    return <div className="home-view">
        <header>
            <a onClick={handleShowList} className="logo-link" href=""><img className="logo" src="images/mylogo.png" alt="logo" /></a>

            <nav>
                <a onClick={handleShowProfile} className="profile-link" href="">Profile</a>
                <button className="logout-button">Logout</button>
            </nav>
        </header>

        <main className="home-main">
            {view === 'list' && <List updateStamp={listUpdateStamp} />}

            {view === 'profile' && <Profile />}

            {/* <p onKeyUp={handleUpdateText} = onKeyUp.bind()></p> */}

        </main>
        <footer>
            <button onClick={handleAdd} className="add-button">+</button>
        </footer>
    </div>
}