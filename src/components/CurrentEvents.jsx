import { currentEvents } from "../eventdata.json";
import "../styles/currentEvents.css";

const CurrentEvents = () => {
    return (
        <div className="current-event-container">
            <div className="cards">
                {
                    currentEvents.map((event, id) => {
                        return (
                            <div className="cards-details" key={id}>
                                <div className="card">
                                    <h2>{event.eventName}</h2>
                                    <img src={event.imgUrl} alt="" />
                                    <div className="event-day">
                                        <span>{event.date}</span>
                                        <span className="status">{event.status}</span>
                                    </div>

                                </div>
                            </div>

                        );
                    })
                }

            </div>

        </div>
    );
}

export default CurrentEvents;