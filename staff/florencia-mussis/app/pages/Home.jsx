function Home(props) {
    console.log('Home -> render')

    const [view, setView] = React.useState('list')
    const [listUpdateStamp, setListUpdateStamp] = React.useState(Date.now()) //cuando necesitamos que se actualice y pinte, lo asociamos a date now


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

    const handleShowMyList = event => {
        event.preventDefault()

        setView('my-list')
    }

    const handleLogout = () => {
        delete sessionStorage.email

        props.onLogout()
    }

    return <div className="home-view">
        <header>
            <a onClick={handleShowList} className="logo" href=""><img className="pluma"
                src="https://icons-for-free.com/download-icon-tweet+post+twitter+write+icon-1320196019185766457_512.png"
                alt="Posts"></img></a>

            <nav className="menu">
                <a onClick={handleShowMyList} className="my-list-link" href="">My stickies</a>
                <a onClick={handleShowProfile} className="profile-link" href="">Profile</a>
                <button onClick={handleLogout} className="logout-button">Logout</button>
            </nav>
        </header>

        <main className="home-main">
           {view ==='list' && <List updateStamp = {listUpdateStamp}/>}
           
           {view ==='profile' && <Profile/>}

           {view === 'my-list' && <MyList/>}
        </main>

        <footer>
            <button onClick={handleAdd} className="add-button">+</button>
        </footer>
    </div>
}