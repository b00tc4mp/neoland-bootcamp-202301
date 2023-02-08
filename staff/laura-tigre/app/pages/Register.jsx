function Register(props) {
    console.log('Register -> render')
    const [feedBack, setFeedback]= React.useState('')
    const handleSubmit = (event) =>{
     event.preventDefault()

     const name= event.target.name.value
     const age= event.target.age.value
     const email= event.target.email.value
     const password= event.target.password

      try {
        registerUser(name, age, email,password)
        setFeedback('')
        props.onNavigateToLogin()

      } catch (error) {
        setFeedback(error.message)
        
      }
    }

    const handleNavigateToLogin= event =>{
      event.preventDefaul()
      props.onNavigateToLogin()
    }



    return <div className="flex flex-col items-center justify-center font-['Montserrat'] max-h-max">
    <main  >
      <form className="flex flex-col items-center gap-4 bg-[#d1d5db] mt-10 p-3"s onSubmit={handleSubmit}>
        <img className="ml-3" src="public/hello!.png" alt="logo empresa" />
        <legend className="text-2xl">Register</legend>

        <div className="flex flex-col justify-center gap-2">
          <label htmlFor="name">Name</label>
          <input className="bg-[#d6d3d1] border-4 hover:border-[#facc15] " type="text" id="name" placeholder="Your name" required />
          <label htmlFor="age">Age</label>
          <input className="bg-[#d6d3d1] border-4 hover:border-[#facc15] " type="number" id="age" placeholder="Your age" required />
          <label htmlFor="email">Email</label>
          <input className="bg-[#d6d3d1] border-4 hover:border-[#facc15] " type="email" id="email" placeholder="Your email" required />
          <label htmlFor="password">Password</label>
          <input className="bg-[#d6d3d1] border-4 hover:border-[#facc15] " type="password" id="password" placeholder="Your password"required/>
          <div className="accept">
            <input type="checkbox" id="conditions" />
            <label htmlFor="conditions">Accept conditions.</label>
          </div>
          </div>
          <div>
          <button className=" bg-[#facc15] h-7 w-20" type="submit">Sign in</button>
        </div>

      </form>
      <p className="flex items-center justify-center gap-2 text-[#dc2626] text-2xl">{feedBack}</p>
      <p className= "flex items-center justify-center gap-2">
        or
        <a className="text-2xl" href=""onClick={handleNavigateToLogin}>Login</a>
      </p>
    </main>
  </div>

}
