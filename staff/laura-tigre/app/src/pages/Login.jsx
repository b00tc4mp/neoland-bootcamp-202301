import{useState} from 'react'
import authenticateUser from '../logic/authenticate-user'

function Login(props) {
    console.log('Login -> render')
    const[feedBack, setFeedback]=useState('')
    const handleSubmit = (event) =>{
        event.preventDefault()

        const email= event.target.email.value
        const password= event.target.password.value

        try {
            authenticateUser(email, password,(error, userId)=>{
                if (error) {
                    setFeedback(error.message)

                    return
                }
                sessionStorage.userId= userId
                props.onNavigateToHome()
            })
            
            
        } catch (error) {
            setFeedback(error.message)
        }

    }

    const handleNavigateToRegister= event => {
        event.preventDefault()
        props.onNavigateToRegister()
    }


    return <div className="flex flex-col items-center justify-center font-['Montserrat']">
        <main>
            <form className="flex flex-col items-center gap-4 bg-[#d1d5db] mt-10 p-3 rounded-lg" onSubmit={handleSubmit}>
                <img className="ml-3" src="images/hello!.png" alt="logo empresa" />
                <legend className="text-2xl">My account</legend>

                <div className="flex flex-col justify-center gap-2">
                    <label htmlFor="email">Email</label>
                    <input className="bg-[#d6d3d1] border-4 hover:border-[#facc15] " type="email" id="email" placeholder="Your email" required />
                    <label htmlFor="password">Password</label>
                    <input className="bg-[#d6d3d1] border-4 hover:border-[#facc15] "
                        type="password"
                        id="password"
                        placeholder="Your password"
                        required
                    />
                 </div>

                 <div>
                    <button className=" bg-[#facc15] h-7 w-20" type="submit">login</button>
                </div>
            </form>
            <p className="flex items-center justify-center gap-2 text-[#dc2626] text-2xl">{feedBack}</p>
            <p className="flex items-center justify-center gap-2" >
                or  <a className="text-2xl" href="" onClick={handleNavigateToRegister}>Register</a>
            </p>
        </main>
    </div>

}
export default Login