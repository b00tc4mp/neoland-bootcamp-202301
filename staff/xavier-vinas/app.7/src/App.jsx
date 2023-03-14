import { useState } from "react"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"


function App() {
  const [view, setView] = useState(sessionStorage.userId ? 'home' : 'login')

  const handleShowRegister = () => {
    setView("register")
  }

  const handleShowLogin = () => {
    setView("login")
  }

  const handleShowHome = () => {
    setView("home")
  }

  const onUnregisterUser = () => {
    setView("login")
  }
  return <div>
    {view === "login" && <Login onNavigateToRegister={handleShowRegister} onNavigateToHome={handleShowHome} />}
    {view === "register" && <Register onNavigateToLogin={handleShowLogin} />}
    {view === "home" && <Home onLogout={handleShowLogin} onUnregisterUser={handleShowLogin} />}

  </div>
}
export default App

