import { useState,useEffect } from "react"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import { Routes, Route , Navigate , useLocation } from 'react-router-dom'


function App() {
  const location = useLocation()
  const [timeStamp, setTimestamp] = useState(Date.now())

    useEffect(() => {
    setTimestamp(Date.now())
  },[location])

  return <div>
    <Routes>
      <Route path = "/*" element={sessionStorage.token ? <Home/> : <Navigate to ="/login" />} />
      <Route path="/login" element={sessionStorage.token ? <Navigate to="/" /> : <Login />} />
      <Route path="/register" element={sessionStorage.token ? <Navigate to="/" /> : <Register />} />
    </Routes>

  </div>
}
export default App

