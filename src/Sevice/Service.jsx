import { useEffect, useState } from "react";
import axios from "axios";

const Service = ({ callBack }) => {
    const BASE_URL = `http://localhost:8081/maskani/api/v1/report`;
    const [allHouses, setAllHouses] = useState([]);

    const fetchAll = async () => {
        axios
            .get(BASE_URL)
            .then((res) => {
                setAllHouses(res.data.results); // Set the data after fetch
            })
            .catch((error) => {
                console.log(error); // Log any errors
            });
    };

    useEffect(() => {
        fetchAll();
    }, []);



    useEffect(() => {
        if (callBack && allHouses.length > 0) {
            callBack(allHouses); // Pass data to the parent (App)
        }else {
            console.log("empty");
        }
        console.log(allHouses); // Log the fetched houses data
    }, [allHouses]);

    return null; // This component doesn't render anything
};

export default Service;
