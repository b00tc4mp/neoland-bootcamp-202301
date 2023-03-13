import { useState, useEffect, useContext } from 'react'
import retrieveUser from '../logic/retrieve-user'
import { useNavigate, Routes, Route, Link, useLocation } from 'react-router-dom'
import Context from '../Context'

function Home(){

    const {alert}= useContext(Context)
    const navigate = useNavigate()
    const location = useLocation()
    const [listUpdateStamp, setListUpdateStamp] = useState(Date.now())
    const [user, setUser] = useState({})
    useEffect(() => {
        try {
          retrieveUser(sessionStorage.token, (error, user) => {
            if (error) {
              alert(error.message)
              return
            }
            setUser(user)
          })
    
        } catch (error) {
          alert(error.message)
        }
      }, [])
    

    return<div>
        <h1>hello world</h1>
    </div>


}
export default Home