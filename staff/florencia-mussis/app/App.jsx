function App() {

    const [view, setView] = React.useState('login')

    const handleShowRegister = () => {
        setView('register')
    }

    const handleShowLogin = () => {
        setView('login')
    }

    const handleShowHome = () => {
        setView('home')
    }

    return <div className="">
        {view === 'register' && <Register onNavigateToLogin={handleShowLogin}/>}
        {view === 'login' && <Login onNavigateToRegister={handleShowRegister} onNavigateToHome={handleShowHome}/>}
        {view === 'home' && <Home/>}
    </div>

}