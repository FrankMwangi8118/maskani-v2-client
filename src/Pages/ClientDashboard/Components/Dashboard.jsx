import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import NotFound from "../../ErrorPages/NotFound.jsx";
import {useNavigate} from "react-router";

const Dashboard =()=>{
    const OnClicks=()=>{
        const navigate=useNavigate();

        navigate("/dashboard");
    }
    return(
        <>


        <h1 style={{color:"red"}}>hello</h1>

        </>
    );
}
export default Dashboard;