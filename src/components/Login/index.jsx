import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import "./index.css"

function Login() {
  const navigate = useNavigate();

  const [userId, setUserid] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {

    const user = JSON.parse(localStorage.getItem("user"))

    if (!user) {
      alert("User not found. Please register.")
      return
    }

    if (userId == user.userid && password ==   user.password) {
      
      navigate("/home")
    } else {
      alert("Invalid UserID or Password")
    }
  }

  return (
    <div className="main">

      <h1>Login</h1>

      <input
        type="text"
        placeholder="User ID"
        onChange={(e) => setUserid(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>Login</button>

      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>

    </div>
  )
}

export default Login