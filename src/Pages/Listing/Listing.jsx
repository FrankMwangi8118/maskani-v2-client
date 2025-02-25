import './Listing.css'
import PropertyCard from "../../Components/PropertyCard/PropertyCard.jsx";
import {useEffect, useState} from "react";
const Listing=({property})=>{
    const [listing,setListing]=useState([]);

        useEffect(()=>{
            setListing(property)
        },[property])
    return(
<div className="listing-wrapper">
    <p className="featured">Featured Properties</p>
    <p className={"recommended"}>Recommended For You</p>
    <div className="listing-grid">

        {listing.map(item=>(
            <PropertyCard property={item} key={listing.price}/>
        ))}

    </div>
</div>


    );
}
export default Listing