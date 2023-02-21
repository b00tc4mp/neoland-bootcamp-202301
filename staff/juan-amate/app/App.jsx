function App() {
    console.log('App -> render')

    const [view, setView] = React.useState(sessionStorage.userId? 'home' : 'login')

    const handleShowRegister = () => {
        setView('register')
    }

    const handleShowLogin = () => {
        setView('login')
    }

    const handleShowHome = () => {
        setView('home')
    }

    return <div>
        {view === 'login' && <Login onNavigateToRegister={handleShowRegister} onNavigateToHome={handleShowHome} />}

        {view === 'register' && <Register onNavigateToLogin={handleShowLogin} />}

        {view === 'home' && <Home onLogout={handleShowLogin} />}
    </div>
}