import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom" 
import "./index.css"

function Register() {

  const [userid, setUserid] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const navigate = useNavigate()

  const handleRegister = () => {

    const userData = {
      name:name,
      userid: userid,
      password: password,
      confirmPassword:confirmPassword
    }

    localStorage.setItem("user", JSON.stringify(userData))
    if(name === "" || userid === "" || password === "" || confirmPassword === "")
    {
      alert("Please fill all the fields")
      return
    }

    if(password !== confirmPassword)
    {
      alert("Password is not Matched")
    }
    else
    {
      alert("Registration Successful")

       navigate("/")
    }
      
  }

  return (

   
      <div className="main">

      <h1>Register</h1>

      <input
        type="text"
        placeholder="Name"
        onChange={(e)=>setName(e.target.value)}
      />

      <br />

      <input
        type="text"
        placeholder="User ID"
        onChange={(e) => setUserid(e.target.value)}
      />

      <br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />

      <input
        type="password"
        placeholder="Confirm Password"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <br />

      <button onClick={handleRegister}>Register</button>
      <p>Already have an account? <Link to = "/" >Login</Link> </p>
      </div>

    
  )
}

export default Register