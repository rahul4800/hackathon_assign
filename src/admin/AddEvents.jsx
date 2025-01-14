import { useState } from "react";
import "../styles/addEvents.css";

const AddEvents =()=>{
    const [event, setEvent] = useState("");
    const [date, setDate] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [status, setStatus] = useState("");
    const [time, setTime] = useState("");
    

    const postEventDetails=(e) =>{
        e.preventDefault()
        axios.post(`http://localhost:4000/carData`,{event,date, imgUrl, status, time, average })
        .then((res) => {
            setEvent("")
            setDate("")
           setImgUrl("")
           setStatus("")
           setTime("")
            
        })
    }

    return(
        <div className="add-container ">
            <h1 className="">Add Events</h1>
            <form onSubmit={postEventDetails} className="add-event-form"   >
                <input type="text" name="event" value={event} onClick={(e)=> setEvent(e.target.value)} placeholder="Event Name" required />
                <input type="date" name="carName" value={date} onClick={(e)=> setDate(e.target.value)} placeholder="Date" required />
                <input type="img" name="imgUrl" value={imgUrl} onClick={(e)=> setImgUrl(e.target.value)} placeholder="Image Url" required />
                <input type="status" name="model" value={status} onClick={(e)=> setStatus(e.target.value)} placeholder="Status" required  />
                <input type="time" name="time" value={time} onClick={(e)=> setTime(e.target.value)} placeholder="Time" required />
                
                <input type="submit" className="form-control-btn" />
            </form>
        </div>
    );

} 
export default AddEvents;