import "./index.css"
import { Link } from "react-router-dom"

function Viewjob()
{
    return(
        <div className="main">
            <h1>Job applications</h1>
            <Link to="/addpage"><button>Add Job</button></Link>
            <div>
                <ul>
                    <li>Company</li>
                    <li>Role</li>
                    <li>Status</li>
                    <li>Actions</li>
                </ul>
            </div>

        </div>
    )
}
export default Viewjob