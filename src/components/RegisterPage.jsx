import "../styles/register.css";
const Register = () => {
    return (
        <div className="register-container">
            <h1>Register</h1>
            <form>
                <input type="text" placeholder="Enter Your Name" />
                <input type="email" placeholder="Enter Your Email" />
                <input type="number" placeholder="Enter Your Phone Number" />
                <select name="" id="">
                    <option value="">React Hackathon</option>
                    <option value="">Python Programming</option>
                    <option value="">Java Programming</option>
                    <option value="">Javascript Hackathon</option>
                    <option value="">Data Science</option>
                </select>
                <div className="form-btn">
                    <button>Submit</button>
                </div>


            </form>
        </div>
    );
}

export default Register;