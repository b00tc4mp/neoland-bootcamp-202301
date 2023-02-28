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
            createSticky(sessionStorage.userId, '', 'public')

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

    return <div className="h-screen">
        <header className="fixed w-full flex justify-between p-2 bg-purple-300">
            <a onClick={handleShowList} className="w-16" href=""><img className="pluma"
                src="https://icons-for-free.com/download-icon-tweet+post+twitter+write+icon-1320196019185766457_512.png"
                alt="Posts"></img>
            </a>

            <nav className="flex items-center gap-5">
                <a onClick={handleShowMyList} className="my-list-link" href="">My stickies</a>
                <a onClick={handleShowProfile} className="profile-link" href="">Profile</a>
                <button onClick={handleLogout} className="bg-purple-300 border-2 rounded-md text-white w-20 drop-shadow-sm">Logout</button>
            </nav>
        </header>

        <main className="home-main flex flex-colum">
           {view ==='list' && <List updateStamp = {listUpdateStamp}/>}
           
           {view ==='profile' && <Profile/>}

           {view === 'my-list' && <MyList/>}
        </main>

        <footer className="fixed bottom-0 left-0 flex justify-center bg-purple-300 border-2 rounded-md text-white w-full" >
            <button className="drop-shadow-sm text-5xl" onClick={handleAdd} >+</button>
        </footer>
    </div>
}