import{ useState} from 'react'
import registerUser from '../logic/register-user'
import Button from '../library/Button'
import Container from '../library/Container'

function Register(props) {
    console.log('Register -> render')
    const [feedBack, setFeedback]= useState('')
    const handleSubmit = (event) =>{
     event.preventDefault()

     const name= event.target.name.value
     const age= parseInt(event.target.age.value)
     const email= event.target.email.value
     const password= event.target.password.value

      try {
        registerUser(name, age, email,password, error=>{
          if(error){
            setFeedback(error.message)
            return
          }

          props.onNavigateToLogin()
        })
       
       } catch (error) {
        setFeedback(error.message)
        
      }
    }

    const handleNavigateToLogin= event =>{
      event.preventDefault()
      props.onNavigateToLogin()
    }



    return <Container className="justify-center font-['Montserrat'] max-h-max">
    <main  >
      <Container TagName="form" className="gap-4 bg-[#d1d5db] mt-10 p-3 rounded-lg" onSubmit={handleSubmit}>
        <img className="ml-3" src="images/hello!.png" alt="logo empresa" />
        <legend className="text-2xl">Register</legend>

        <Container className="justify-center gap-2">
          <label htmlFor="name">Name</label>
          <input className="bg-[#d6d3d1] border-4 hover:border-[#facc15] " type="text" id="name" placeholder="Your name" required/>
          <label htmlFor="age">Age</label>
          <input className="bg-[#d6d3d1] border-4 hover:border-[#facc15] " type="number" id="age" placeholder="Your age" required />
          <label htmlFor="email">Email</label>
          <input className="bg-[#d6d3d1] border-4 hover:border-[#facc15] " type="email" id="email" placeholder="Your email" required/>
          <label htmlFor="password">Password</label>
          <input className="bg-[#d6d3d1] border-4 hover:border-[#facc15] " type="password" id="password" placeholder="Your password" required/>
          <div className="accept">
            <input type="checkbox" id="conditions" />
            <label htmlFor="conditions">Accept conditions.</label>
          </div>
          </Container>
          <div>
          {/* <button className=" bg-[#facc15] h-7 w-20" type="submit">Sign in</button> */}
          <Button type='submit'>Sing in</Button>
        </div>

      </Container>
      <p className="flex items-center justify-center gap-2 text-[#dc2626] text-2xl">{feedBack}</p>
      <p className= "flex items-center justify-center gap-2">
        or
        <a className="text-2xl" href=""onClick={handleNavigateToLogin}>Login</a>
      </p>
    </main>
  </Container>

}
export default Register