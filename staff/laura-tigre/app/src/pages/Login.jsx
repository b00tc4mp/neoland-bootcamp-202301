import{useState} from 'react'
import authenticateUser from '../logic/authenticate-user'
import Button from '../library/Button'
import Container from '../library/Container'
import {Link, useNavigate} from 'react-router-dom'

function Login() {
    console.log('Login -> render')

    const navigate = useNavigate()
    const[feedBack, setFeedback]=useState('')

    const handleSubmit = (event) =>{
        event.preventDefault()

        const email= event.target.email.value
        const password= event.target.password.value

        try {
            authenticateUser(email, password,(error, token)=>{
                if (error) {
                    setFeedback(error.message)

                    return
                }
                sessionStorage.token= token
                navigate('/')
            })
            
            
        } catch (error) {
            setFeedback(error.message)
        }

    }



    return <Container className="justify-center font-['Montserrat']">
        <main>
            <Container TagName="form" className=" gap-4 bg-[#d1d5db] mt-10 p-3 rounded-lg" onSubmit={handleSubmit}>
                <img className="ml-3" src="images/hello!.png" alt="logo empresa" />
                <legend className="text-2xl">My account</legend>

                <Container className="justify-center gap-2">
                    <label htmlFor="email">Email</label>
                    <input className="bg-[#d6d3d1] border-4 hover:border-[#facc15] " type="email" id="email" placeholder="Your email" required />
                    <label htmlFor="password">Password</label>
                    <input className="bg-[#d6d3d1] border-4 hover:border-[#facc15] "
                        type="password"
                        id="password"
                        placeholder="Your password"
                        required
                    />
                 </Container>

                 <div>
                   
                    <Button type= "submit">login</Button>
                </div>
            </Container>
            <p className="flex items-center justify-center gap-2 text-[#dc2626] text-2xl">{feedBack}</p>
            <p className="flex items-center justify-center gap-2" >
                or  <Link to="/register" className="text-2xl" >Register</Link>
            </p>
        </main>
    </Container>

}
export default Login