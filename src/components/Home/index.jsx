import { useState } from "react"
import { Link } from "react-router-dom"
import "./index.css"

function Home(){
    return(
        <div className="main">
            <header>
                <h1>Job Tracker</h1>
                <Link to="/"><button className="but">Logout</button></Link>
            </header>
                <div className="sub">
                    <div className="sub1">
                        <h3>Total Applications</h3>
                        <p>0</p>
                    </div>
                    <div className="sub1">
                        <h3>Interviews</h3>
                        <p>0</p>
                    </div>
                    <div className="sub1">
                        <h3>Offers</h3>
                        <p>0</p>
                    </div>
                </div>
                <div className="butn">
                <Link to="/addpage"><button>Add Job Application</button></Link>
                <Link to="/viewjob"><button>View Job Applications</button></Link>
                </div>
        </div>
    )
}
export default Home