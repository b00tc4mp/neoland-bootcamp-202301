function Home() {
    console.log('Home -> render')

    const [view, setView]= React.useState('list')
    const [listUpdateStamp,setListUpdateStamp] = React.useState(Date.now())
    const [updateStickyText, setUpdateStickyText]= React.useState(Date.now())
    
    const handleShowProfile = event => {
        event.preventDefault()

        setView('profile')
    }

    const handleShowList =event => {
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
//my code
    // const handleUpdateStickyText = event =>{
    //     event.preventDefault()
    //         try{
    //         updateStickyText(email.stickyId.text)

    //         setUpdateStickyText(Date.now())
    //     } catch(error) {
    //         alert(error.message)
    //     }
    // }

    return <div className="home-view">
        <header>
            <a onClick={handleShowList} className="logo-link" href="">

                <img className="logo" src="https://cdn-icons-png.flaticon.com/512/2767/2767812.png" alt="company logo" />
            </a>
            <nav>
                <a onClick={handleShowProfile} className="profile-link" href="">Profile</a>
                <button className="logout-button">Logout</button>
            </nav>
        </header>
        <main className="home-main">
            {view === 'list' && <List listUpdateStamp={listUpdateStamp}/>}

            {view === 'profile' && <Profile />}
        </main>
        <footer>
            <button onClick={handleAdd} className="add-button">new sticky</button>
        </footer>
    </div>
}