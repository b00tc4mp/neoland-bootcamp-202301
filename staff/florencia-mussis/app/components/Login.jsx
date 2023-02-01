function Login() {
  return <main>
        <form>
            <h1>Login</h1>
            <div className="form-inner">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" className="input-text" required/>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" className="input-text" required/>
            </div>

            <button type="submit" className="button">Login</button>
        </form>
        <p className="feedback">error...</p>
        <div className="or">
            <p className="question">¿No tienes una cuenta?<a className="option" href=""> Registrate</a></p>
        </div>
    </main>
}