import { useState  } from "react"
import registerUser from "../logic/register-user"
import Button from '../library/Button'
import Container from '../library/Container'
import { Link, useNavigate } from 'react-router-dom'
import Feedback from '../components/Feedback'

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
    <Container TagName="form" className="w-3/12 h-2/3 justify-center rounded-xl border border-slate-300 gap-8 drop-shadow-md" onSubmit={handleSubmit}>

      <h1>MY LISTS</h1>

      <div className="form-inner flex flex-col justify-center gap-4">
       
        <input type="name" id="name" placeholder="Name" className="border-2 rounded-md w-56 focus:outline-sky-500" required />

        <input type="number" id="age" placeholder="Age" className="border-2 rounded-md w-56 focus:outline-sky-500" required />

        <input type="email" id="email" placeholder="E-mail" className="border-2 rounded-md w-56 focus:outline-sky-500" required />

        <input type="password" id="password" placeholder="Password" className="border-2 rounded-md w-56 focus:outline-sky-500" required />

        <div className="checkbox pt-4">
          <input type="checkbox" id="conditions" />
          <label htmlFor="conditions" className="text-xs"> Acepto los términos y condiciones</label>
        </div>
      </div>

      <Button className="border-2 rounded-md w-40" type="submit">CREATE ACCOUNT</Button>
    </Container>
    <p className="feedback">{feedback}</p>
    <div className="pt-4 text-sm">
      <p className="question">¿Tienes una cuenta?<Link to="/login"> Login</Link></p>
    </div>
  </Container>
}

export default Register