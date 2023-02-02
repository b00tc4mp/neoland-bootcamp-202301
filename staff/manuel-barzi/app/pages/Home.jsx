function Home() {
    const [view, setView] = React.useState('list')

    const handleShowProfile = event => {
        event.preventDefault()

        setView('profile')
    }

    return <div className="home-view">
        <header>
            <a className="logo-link" href=""><img className="logo" src="images/logo.png" alt="Chachi Games" /></a>

            <nav>
                <a onClick={handleShowProfile} className="profile-link" href="">Profile</a>
                <button className="logout-button">Logout</button>
            </nav>
        </header>
        <main className="home-main">
            {view === 'list' && <List />}

            {view === 'profile' && <Profile />}
        </main>
        <footer>
            <button className="add-button">+</button>
        </footer>
    </div>
}