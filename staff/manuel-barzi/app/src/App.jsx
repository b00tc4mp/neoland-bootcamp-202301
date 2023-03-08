import { useState } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'

function App() {
    console.log('App -> render')

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

    return <div className="">
        <Routes>
            <Route index element={<Home onLogout={handleShowLogin} />} />
            <Route path="/login" element={<Login onNavigateToRegister={handleShowRegister} onNavigateToHome={handleShowHome} />} />
            <Route path="/register" element={<Register onNavigateToLogin={handleShowLogin} />} />
        </Routes>
    </div>
}

export default App
