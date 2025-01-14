
import { Link } from 'react-router-dom';
import "../styles/sidebar.css";
import { useState } from 'react';
import CurrentEvents from './CurrentEvents';
import UpcomingEvents from './UpcomingEvents';
import PastEvents from './PastEvents';

const SideBar = () => {
    const [view, setView] = useState("currentevents");

    const DashboardView = () =>{
        if(view === ""){
            return;
        }
        else if(view === "currentevents"){
            return <CurrentEvents />
        }
        else if(view === "upcomingevents"){
            return <UpcomingEvents />
        }
        else if(view === "pastevents"){
            return <PastEvents />
        }
    }

    return (
        <div className="sidebar">
            
            {/* <hr /> */}
            <div className="center">
                <ul>
                    <Link to="/" style={{ textDecoration: "none" }} >
                        <li  >
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <Link to="" style={{ textDecoration: "none" }} >
                        <li onClick={()=> setView("currentevents")}
                            className={view === "currentevents" ? "active" : ""} 
                            >
                            <span>Current Events</span>
                        </li>
                    </Link>
                    <Link to="/" style={{ textDecoration: "none" }} >
                        <li
                        onClick={()=> setView("upcomingevents")}
                        className={view === "upcomingevents" ? "active" : ""}>
                            <span>Upcoming Events</span>
                        </li>
                    </Link>
                    <Link to="/" style={{ textDecoration: "none" }} >
                        <li onClick={()=> setView("pastevents")}
                            className={view === "pastevents" ? "active" : ""}
                            >
                            <span>Past Events</span>
                        </li>
                    </Link>
                    {/* <Link to="/" style={{ textDecoration: "none" }} >
                        <li>
                            <span>Register</span>
                        </li>
                    </Link> */}
                    <Link to="/" style={{ textDecoration: "none" }} >
                        <li>
                            <span>Profile</span>
                        </li>
                    </Link>
                    <li>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="info">
                {DashboardView()}
            </div>
        </div>
    );
}

export default SideBar;