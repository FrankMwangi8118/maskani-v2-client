import Sidebar from "../../Component/Sidebar/Sidebar.jsx";
import NavbarClient from "../../Component/NavBar/Navbar-client.jsx";
import Dashboards from "../../Component/Dashboard/Dashboards.jsx";
import Profile from "../../Component/Profile/Profile.jsx";
import "./Dashboard.css"
import {useState} from "react";
import PropertiesManagement from "../../Component/PropertyManagement/PropertiesManagement.jsx";
import Properties from "../../Component/Properties/Properties.jsx";
import Message from "../../Component/Messages/Message.jsx";
import Reviews from "../../Component/Reviews/Reviews.jsx";

const Dashboard = () => {

    const [selected, setSelected] = useState("Dashboard");


    const render = () => {
        switch (selected) {
            case "Dashboard":
                return <Dashboards/>;
            case "Profile":
                return <Profile/>;
            case "My properties":
                return <Properties/>;
            case "property management":
                return <PropertiesManagement/>
            case "messages":
                return <Message/>;
            case "reviews":
                return <Reviews/>;
        }
    }

    return (
        <>
            <Sidebar selected={selected} setSelected={setSelected}/>
            <NavbarClient/>
            <div className={"dash-container"}>
                {render()}
            </div>
        </>
    )
}
export default Dashboard