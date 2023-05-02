import logo from "./assets/logo.svg"
import './global.css'

export function App() {
  return (
    <div className="container">
      <header className="header">
        <img src={ logo } alt="Workflow" />
        <span>Please enter your login information</span>
      </header>
      
      <form>
        <div className="inputContainer">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="johndoe@gmail.com"
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="***************"
          />
        </div>

        <a href="">Forgot your password ?</a>
        <button className="button">
       To log in <img src="" alt="" />
        </button>
        <div className="footer">
          <p>You do not have an account?</p>
          <a href="#">Create an account</a>
        </div>
      </form>
    </div>
  );
}


