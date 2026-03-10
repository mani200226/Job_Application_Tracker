import "./index.css"

function Addpage(){
    return(
        <div className="main">
            <div className="sub">
                <h1>Add Job Application</h1>
                <input type="text" placeholder="CompanyName"/>
                <input type="text" placeholder="Hon Title"/>
                <select>
                    <option>Applied</option>
                    <option>Interview</option>
                    <option>Offer</option>
                    <option>Rejected</option>
                </select>
                <button>Add Job</button>
            </div>
        </div>
    )
}
export default Addpage