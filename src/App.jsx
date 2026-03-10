import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Addpage from './components/Addpage'
import Viewjob from './components/Viewjob'
import {Routes, Route} from "react-router-dom"

function App() {
  

  return (
    
     
    
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/addpage" element={<Addpage/>}/>
        <Route path="/viewjob" element={<Viewjob/>}/>
      </Routes>
    
  )
}

export default App
