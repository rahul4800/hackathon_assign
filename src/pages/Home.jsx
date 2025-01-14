import Navbar from "../components/Navbar";
import SideBar from "../components/Sidebar";
import "../styles/home.css";

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <SideBar />
            <div className="homeContainer">
                
            </div>
        </div>
    );
}

export default Home;