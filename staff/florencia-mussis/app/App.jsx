function App() {

    const [view, setView] = React.useState(sessionStorage.email? 'home' : 'login')

    const handleShowRegister = () => {
        setView('register')
    }

    const handleShowLogin = () => {
        setView('login')
    }

    const handleShowHome = () => {
        setView('home')
    }

    return <div className="app">
        {view === 'register' && <Register onNavigateToLogin={handleShowLogin}/>}
        {view === 'login' && <Login onNavigateToRegister={handleShowRegister} onNavigateToHome={handleShowHome}/>}
        {view === 'home' && <Home/>}
    </div>

}