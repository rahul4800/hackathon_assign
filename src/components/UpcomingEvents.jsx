import { useNavigate } from "react-router-dom";
import { upcomingEvents } from "../eventdata.json";
import "../styles/upcomingEvents.css";

const UpcomingEvents=()=>{

    const navigate = useNavigate();
    const handleRegister=() =>{
        navigate("/registerpage");
    }

    return(
        <div className="current-event-container">
            <div className="Upcoming-cards">
                {
                    upcomingEvents.map((event, id) => {
                        return (
                            <div className="cards-details" key={id}>
                                <div className="card">
                                    <h2>{event.eventName}</h2>
                                    <img src={event.imgUrl} alt="" />
                                    <div className="event-day">
                                        <span>{event.date}</span>
                                        <span>{event.time}</span>
                                        <span className="status">{event.status}</span>
                                    </div>
                                    <button onClick={handleRegister}>Register Now</button>

                                </div>
                            </div>

                        );
                    })
                }

            </div>

        </div>
    );
}

export default UpcomingEvents;