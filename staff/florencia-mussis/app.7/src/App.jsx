import { useState } from "react"
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'

function App() {

    const [view, setView] = useState(sessionStorage.token ? 'home' : 'login')

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
        {view === 'register' && <Register onNavigateToLogin={handleShowLogin} />}
        {view === 'login' && <Login onNavigateToRegister={handleShowRegister} onNavigateToHome={handleShowHome} />}
        {view === 'home' && <Home onLogout={handleShowLogin}/>}
    </div>
}

export default App;
