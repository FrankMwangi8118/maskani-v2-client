import React from "react";
import "./PropertyCard.css";
import location from "../../assets/location.png"

const PropertyCard = ({property}) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={property.image_url} alt="Property" />
                <div className="labels">
                    <span className="label-featured">Featured</span>
                </div>
            </div>
            <div className="card-content">
                <p className="address"> <img className={"location-icon"} width="17" height="17" src={location} alt="marker"/> {property.geo_location}</p>
                <h2 className="title">{property.building_name}</h2>
                <p className="details">
                    <img width="17" height="17" src="https://img.icons8.com/ios-filled/50/country-house.png" alt="country-house"/> Beds: {property.unit_type} &nbsp; | &nbsp; 🛁 Baths: {property.baths} &nbsp; | &nbsp; 📏 Sqft: {property.sqft}
                </p>
                <hr className={"seperator"}/>
                <div className="footer">

                    <div className="owner">
                        <img src={property.agentImage} alt="Owner" />

                        <span className="agent-name">"mwas"</span>
                    </div>
                    <span className="price">${property.rent_price}</span>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;
