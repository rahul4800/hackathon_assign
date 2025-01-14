import "../styles/loginPage.css";
const Login = () => {
    return (
        <div className="login-container">
            <h1>Login/Register</h1>
            <form>
                <input type="text" placeholder="Enter Your Name" />
                <input type="email" placeholder="Enter Your Email" />
                <input type="number" placeholder="Enter Your Phone Number" />
                
                <div className="Login-btn">
                    <button>Login</button>
                </div>


            </form>
        </div>
    );
}

export default Login;