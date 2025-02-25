import {useEffect, useState} from "react";
import axios from "axios";

const Service=()=>{
    let BASE_URL=`http://localhost:8081/maskani/api/v1/report`;
    let [allHouses,setAllHouses]=useState([]);
    const[filteredHouses,setFilteredHouses]=useState([]);

    const fetchAll=()=>{
        axios.get(BASE_URL)
            .then(res=>{
                setAllHouses(res.data.results)
            })
            .catch((error)=>{
                console.log(error)
            })

    }
    useEffect(()=>{
        fetchAll()
    },[])

    useEffect(() => {
        console.log(allHouses)
    }, [allHouses]);









}
export default Service;