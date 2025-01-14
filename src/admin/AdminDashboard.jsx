import { useState } from "react";

import "../styles/adminDashboard.css";
import AddEvents from "./AddEvents";

const AdminDashboard = () =>{
    const [view, setView] = useState("");
    //const [active, setActive] = useState(false);

    const DashboardView = () =>{
        if(view === ""){
            return <Welcome />;
        }
        else if(view === "addEvent"){
            return <AddEvents />
        }
        // else if(view === "addBlog"){
        //     return <AddBlog />
        // }
        // else if(view === "addService"){
        //     return <Addservice />
        // }

    }

    return(
        <div className="container-fluid p-4 my-5 text-center  admin-board">
            <h1 className="">Dashboard</h1>

            <div className="admin-row ">
                <aside className="col">
                    <h3 className="mb-5" onClick={()=> setView("")}>Admin Dashboard</h3>
                    <button onClick={()=> setView("addEvent")}
                        className={view === "addEvent" ? "active" : ""}
                        >Add Event</button>
                    {/* <button onClick={()=> setView("addBlog")}
                        className={view === "addBlog" ? "active": ""}
                        >Add Blog</button>
                    <button onClick={()=> setView("addService")}
                        className={view === "addService" ? "active": ""}
                        >Add Services</button> */}

                </aside>
                <div className="col-md-9 right-side">
                    {DashboardView()}
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;

const Welcome = () =>{
    return(
        <div className="text-center">
            <h1 className="text-danger">Welcome To Admin Dashboard</h1>
        </div>
    );
}