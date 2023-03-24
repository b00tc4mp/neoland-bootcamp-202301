import { useState, useEffect } from 'react'
import { Routes, Route, Navigate, useLocation, useParams } from 'react-router-dom'
import Context from './Context'
import Alert from './components/Alert'
import Login from './pages/Login'
import Register from './pages/Register'
import RegisterPhotographer from './pages/RegisterPhotographer'
import Home from './pages/Home'

function App() {
  console.log('App -> render')

  const location = useLocation()
  const [timestamp, setTimestamp] = useState(Date.now())
  const [feedback, setFeedback] = useState()

  useEffect(() => {
    setTimestamp(Date.now())
  }, [location])

  const alert = (message, level = 'error') => {
    setFeedback({ message, level })
  }

  const handleAcceptFeedback = () => setFeedback()

  return <Context.Provider value={{ alert }}>
    {feedback && <Alert message={feedback.message} level={feedback.level} onAccept={handleAcceptFeedback} />}

    <Routes>
      <Route path='/*' element={sessionStorage.token ? <Home /> : <Navigate to='/login' />} />
      <Route path='/login' element={sessionStorage.token ? <Navigate to='/' /> : <Login />} />
      <Route path='/register' element={sessionStorage.token ? <Navigate to='/' /> : <Register />} />
      <Route path='/register/admin' element={sessionStorage.token ? <Navigate to='/' /> : <RegisterPhotographer />} />

      <Route path='/hello/:to' element={<Hello />} />
    </Routes>
  </Context.Provider>
}

function Hello() {
  const params = useParams()

  return <h1>Hello {params.to}</h1>
}

export default App