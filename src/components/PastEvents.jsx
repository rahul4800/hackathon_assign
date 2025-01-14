import { pastEvents } from "../eventdata.json";
const PastEvents=()=>{
    return(
        <div className="current-event-container">
        <div className="cards">
            {
                pastEvents.map((event, id) => {
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

export default PastEvents;