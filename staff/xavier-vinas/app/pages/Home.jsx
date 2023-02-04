function Home(props) {
    const [view, setView] = React.useState("list")
    const [ listUpdateStamp , setListUpdateStamp] = React.useState(Date.now())


    const handleShowProfile = event => {
        event.preventDefault()
        setView("profile")
    }

    const handleShowMyList = event =>{
        event.preventDefault()

        setView("my-list")
    
    }



    const handleShowList= event =>{
        event.preventDefault()
        setView('list')
      }
 
    const handleAdd =() => {
        try {
            createSticky ( sessionStorage.email , "", "public")
            setListUpdateStamp (Date.now())
        } catch (error) {
            alert(error.message)
        }
    }
    const handleLogout = () => {
        delete sessionStorage.email

        props.onLogout()
    }
    
       return <div className="home-view">
        <header>
       
            <nav>
            <a onClick={handleShowList} className="logo-link" href=""><img className="logo" src="https://cdn-icons-png.flaticon.com/128/431/431249.png" alt=""></img></a>
                <a onClick={handleShowMyList} className="my-list-link" href="">My Stickies</a>
                <a onClick={handleShowProfile} className="profile-link" href="">Profile</a>
                <button onClick={handleLogout}  className="logout-button">logout</button>
               
            </nav>
         
        </header>

        <main className="home-main">

            {view === "list" && <List listUpdateStamp={listUpdateStamp} />}

            {view === "profile" && <Profile />}

            {view === "my-list" && <MyList />}
        </main>

        <footer>

            <button onClick={handleAdd} className="add-button">Add Sticky</button>
        </footer>

    </div>
}