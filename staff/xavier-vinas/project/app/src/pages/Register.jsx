import { useState } from "react"
import registerUser from "../logic/register-user"
import Button from "../library/Button"
import Container from "../library/Container"
import { Link, useNavigate } from "react-router-dom"
import Feedback from '../components/Feedback'


function Register() {
    const navigate = useNavigate()

    const [feedback, setFeedback] = useState("")


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
                navigate("/login")
            })

        } catch (error) {
            setFeedback({
                message: error.message,
                level: 'error'
            })
        }
    }


    return <Container TagName="main">
        <Container className={" bg-slate-100 border-double border-4  border-black"}>
            
            <Container className={"  border-double border-4  border-black"}>
                <img src="./logo.png"></img>
            </Container>

            <Container TagName="form" className={"grid grid-cols-4 gap-2 mt-11 "} onSubmit={handleSubmit}>
             
                
                    <label className="gap-10 block text-gray-700 font-bold mb-2" htmlFor="name">Your username :</label>
                    <input className=" gap-10shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " type="text" placeholder="Enter username" id="name" />

                    <label className="block text-gray-700 font-bold mb-2" htmlFor="age">age:</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " type="number" placeholder="Enter age" id="age" />

                    <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email adress:</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " type="email" placeholder="email" id="email" />

                    <label className="block text-gray-700 font-bold mb-2" htmlFor="password">choose a pasword:<sup>*</sup></label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " type="password" placeholder="pasword" id="password" />
               
                
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Nombre de la tarjeta:</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="name" name="name" required />

                    <label className="block text-gray-700 font-bold mb-2" htmlFor="number">Número de tarjeta de crédito:</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="number" name="number" required />

                    <label className="block text-gray-700 font-bold mb-2" htmlFor="cvv">CVV:</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="cvv" name="cvv" required />

                    <label className="block text-gray-700 font-bold mb-2" htmlFor="expiration-date">Fecha de vencimiento:</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="expiration-date" name="expiration-date" placeholder="MM/AA" required />
                
            </Container>
            <Container className={" p-1"}>
                <Button className ={""} type="submit">Register</Button>
            </Container>

            {feedback && <Feedback message={feedback.message} level={feedback.level} />}
            <p className="flex items-center justify-center gap-2"> or <Link to="/login">Login</Link></p>
        </Container>
    </Container>
}

export default Register
