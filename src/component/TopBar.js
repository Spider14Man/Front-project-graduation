import { Link } from "react-router-dom"
import '../Pages/Dashboard/dashboard.css'

export default function TopBar() {
        return (
            <div className="d-flex container top-bar">
                <h1>Stadiums</h1>
                <Link to='/' className="register-nav">Go To Web Site</Link>
            </div>
        )
}