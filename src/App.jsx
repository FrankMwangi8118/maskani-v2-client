import PropertyCard from "./Components/PropertyCard/PropertyCard.jsx";
import Landing from "./Pages/LandingPage/Landing.jsx";
import Service from "./Sevice/Service.jsx";
import Listing from "./Pages/Listing/Listing.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import NavBar from "./Components/NavBar/NavBar.jsx";
import LoginSignUp from "./Components/LoginSignup/LoginSignup.jsx";
const App = () => {
    const[isLogin,setIsLogin]=useState(false);

    const [allHouse,setAllHouse] = useState([]);
    const [filterUrl,setFilterUrl]=useState("");
    // const [filteredUnits,setFilteredUnits]=useState([]);

    const BASE_URL = `http://localhost:8081/maskani/api/v1/report`;

    const setLogin=(states)=>{
        setIsLogin(states)
        console.log(isLogin + "from app")
    }

    const getFilterUrl = (filter) =>{
        setFilterUrl(filter);

    }

        const getFilteredUnits = (filtered) => {
            console.log("Filtered Units received in App:", filtered);
            setAllHouse(filtered);
        };


    console.log(filterUrl)

    const apiCall=()=>{
        axios
            .get(BASE_URL)
            .then(res=>{
                setAllHouse(res.data.results);
            }).catch(err=>{
                console.log(err);
        })
            .catch(err=>{
                console.log(err);
            })
    }

    useEffect(()=>{
        apiCall();
    },[])

    console.log(allHouse);





    return(

    <>
        <NavBar setLogin={setLogin}/>


        <Landing
                getFilterUrl={getFilterUrl}
                getFilteredUnits={getFilteredUnits}
                isLogin={isLogin}
            />
            <Listing  property={allHouse} />


        </>
    );
}
export default App;