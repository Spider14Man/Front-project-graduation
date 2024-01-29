import { Link } from "react-router-dom"

export default function Header(){
    function handleLogOut(){
        window.localStorage.removeItem('email');
        window.location.pathname='/home';
    }
    return (
        <div className="container">
        <nav style={{display:"flex",color:"white",alignItems:"center",justifyContent:"space-between",padding:'4px'}}>
            <h6><Link to='/home'>Home</Link></h6>
            <h6><Link to='/about'>About</Link></h6>
            <div style={{display:"flex"}}>
                    {!window.localStorage.getItem('email')?
                    <div>
                        <Link  to="/register"className="register-nav" style={{textAlign:"center"}}>
                            Register
                        </Link>
                        <Link to="/login" className="register-nav" style={{textAlign:"center"}}>
                            Login
                        </Link>
                    </div>
                    :<div className="register-nav" onClick={handleLogOut}>Log out</div>
}
            </div>
        </nav>
        </div>
    )
}