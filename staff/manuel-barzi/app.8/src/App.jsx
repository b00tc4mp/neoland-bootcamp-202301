import { useState, useEffect } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import { Routes, Route, Navigate, useLocation, useParams } from 'react-router-dom'

function App() {
    console.log('App -> render')

    const location = useLocation()
    const [timestamp, setTimestamp] = useState(Date.now())

    useEffect(() => {
        setTimestamp(Date.now())
    }, [location])

    return <div className="">
        <Routes>
            <Route path="/*" element={sessionStorage.token ? <Home /> : <Navigate to="/login" />} />

            <Route path="/login" element={sessionStorage.token ? <Navigate to="/" /> : <Login />} />
            <Route path="/register" element={sessionStorage.token ? <Navigate to="/" /> : <Register />} />

            <Route path="/hello/:to" element={<Hello />} />
        </Routes>
    </div>
}

function Hello() {
    const params = useParams()

    return <h1 className="text-[white]">hola {params.to}</h1>
}

export default App
