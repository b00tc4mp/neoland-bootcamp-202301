function App() {
    const [view, setView] = React.useState("login")

    const handleShowRegister = () => {
        setView("register")
    }

    const handleShowLogin = () => {
        setView("login")
    }

    const handleShowHome = () => {
        setView("home")
    }





    return <div>
        {view === "login" && <Login onNavigateToRegister={handleShowRegister} onNavigateToHome={handleShowHome}/>}
        {view === "register" && <Register onNavigateToLogin={handleShowLogin} />}
        {view === "home" && <Home />}
        
    </div>
}

