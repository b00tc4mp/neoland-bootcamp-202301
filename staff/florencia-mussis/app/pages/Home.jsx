function Home() {
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

    return <div className="home-view">
        <header>
            <a onClick={handleShowList} className="logo" href=""><img className="pluma"
                src="https://icons-for-free.com/download-icon-tweet+post+twitter+write+icon-1320196019185766457_512.png"
                alt="Posts"></img></a>

            <nav className="menu">

                <a onClick={handleShowProfile} className="profile-link" href="">Profile</a>
                <button className="logout-button">Logout</button>
            </nav>
        </header>

        <main className="home-main">
           {view ==='list' && <List updateStamp = {listUpdateStamp}/>}
           
           {view ==='profile' && <Profile/>}
        </main>

        <footer>
            <button onClick={handleAdd} className="add-button">+</button>
        </footer>
    </div>
}