import { useState } from "react"
import registerUser from "../logic/register-user"
import Button from '../library/Button'
import Container from '../library/Container'
import { Link, useNavigate } from 'react-router-dom'
import Feedback from '../components/Feedback'
import logo from '../img/logo.png'

function Register() {
  console.log('Register -> render')

  const navigate = useNavigate()

  const [feedback, setFeedback] = useState()

  const handleSubmit = event => {
    event.preventDefault()

    const name = event.target.name.value
    const age = parseInt(event.target.age.value)
    const email = event.target.email.value
    const password = event.target.password.value

    try {
      registerUser(name, age, email, password, error => {
        if (error) {
          setFeedback({
            message: error.message,
            level: 'error'
          })

          return
        }

        navigate('/login')
      })
    } catch (error) {
      setFeedback({
        message: error.message,
        level: 'error'
      })

    }
  }

  return <Container TagName="main" className="h-screen font-['Montserrat'] justify-center">
    <Container TagName="form" className="w-3/12 h-2/3 justify-center rounded border border-slate-300 gap-8 drop-shadow-md sm: w-3/4" onSubmit={handleSubmit}>

      <img src={logo} />

      <div className="form-inner flex flex-col justify-center gap-4">

        <input type="name" id="name" placeholder="Name" className="border-2 rounded w-60 focus:outline-teal-500 sm: w-40" required />

        <input type="number" id="age" placeholder="Age" className="border-2 rounded w-60 focus:outline-teal-500 sm: w-40" required />

        <input type="email" id="email" placeholder="E-mail" className="border-2 rounded w-60 focus:outline-teal-500 sm: w-40" required />

        <input type="password" id="password" placeholder="Password" className="border-2 rounded w-60 focus:outline-teal-500 sm: w-40" required />
      </div>

      <Button className="border-2 w-40 text-sm h-7 rounded-md" type="submit">CREATE ACCOUNT</Button>
    </Container>

    {feedback && <Feedback message={feedback.message} level={feedback.level} />}

    <p className="pt-4 text-sm">¿Tienes una cuenta?<Link to="/login" className=" text-teal-500"> Login</Link></p>
  </Container>
}

export default Register