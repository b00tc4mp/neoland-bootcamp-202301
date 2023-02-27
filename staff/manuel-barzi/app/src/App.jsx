import { useState } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'

function App() {
  console.log('App -> render')

  const [view, setView] = useState(sessionStorage.userId? 'home' : 'login')

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
      {view === 'login' && <Login onNavigateToRegister={handleShowRegister} onNavigateToHome={handleShowHome} />}

      {view === 'register' && <Register onNavigateToLogin={handleShowLogin} />}
      
      {view === 'home' && <Home onLogout={handleShowLogin} />}
  </div>
}

export default App
