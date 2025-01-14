import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {

    const navigate = useNavigate();
    const handleLogin =()=>{
        navigate("/login");
    }
    const handleAdmin =()=>{
        navigate("/adminlogin");
    }
    return (
        <div className="navbar">
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }} >
                    <span className="logo">Hackathon</span>
                </Link>
            </div>

            {/* <div className="wrapper">
                

            </div> */}
            <div className="items">
                <input type="text" placeholder="Search..." />
                <button className="admin-btn"
                onClick={handleAdmin}
                >Admin</button>
                <button className="login-btn" 
                onClick={handleLogin}
                >Login/Register</button>
            </div>
        </div>
    );
}

export default Navbar;