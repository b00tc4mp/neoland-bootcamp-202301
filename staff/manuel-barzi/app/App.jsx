function App() {
    console.log('App -> render')

    const [view, setView] = React.useState('login')

    const handleShowRegister = () => {
        setView('register')
    }

    const handleShowLogin = () => {
        setView('login')
    }

    return <div className="">
        {/* <button onClick={handleShowRegister}>Show Register</button>
        <button onClick={handleShowLogin}>Show Login</button> */}

        {view === 'login' && <Login onNavigateToRegister={handleShowRegister} />}
        {view === 'register' && <Register onNavigateToLogin={handleShowLogin} />}
        {view === 'home' && <h1>hola home</h1>}
    </div>
}