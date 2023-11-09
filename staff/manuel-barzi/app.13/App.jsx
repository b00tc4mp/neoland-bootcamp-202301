function App() {
    console.log('App -> render')

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
        {/* <button onClick={handleShowRegister}>Show Register</button>
        <button onClick={handleShowLogin}>Show Login</button> */}

        {view === 'login' && <Login onNavigateToRegister={handleShowRegister} onNavigateToHome={handleShowHome} />}

        {view === 'register' && <Register onNavigateToLogin={handleShowLogin} />}
        
        {view === 'home' && <Home />}
    </div>
}