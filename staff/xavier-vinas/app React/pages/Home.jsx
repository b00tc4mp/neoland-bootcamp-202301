function Home() {
    const [view, setView] = React.useState("list")


    const handleShowProfile = event => {
        event.preventDefault()
        setView("profile")
    }
    const handleShowHome = event => {
        event.preventDefault()
        setView("home")
        setView("list")
    }




    return <div className="home-view">
        <header>

            <nav>
                <a onClick={handleShowHome} className="logo-link" href=""><img className="logo" src="https://cdn-icons-png.flaticon.com/128/431/431249.png" alt=""></img></a>
                <a onClick={handleShowProfile} className="profile-link" href="">Profile</a>
                <button className="logout-button">logout</button>
            </nav>

        </header>

        <main className="home-main">

            {view === "list" && <List />}

            {view === "profile" && <Profile />}
        </main>

        <footer>

            <button className="add-button">Add Sticky</button>
        </footer>

    </div>
}