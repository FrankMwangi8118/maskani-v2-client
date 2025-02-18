import React from "react";
import "./PropertyCard.css";

const PropertyCard = ({ property }) => {
    return (
        <div className="property-card">
            {/* Image Section */}
            <div className="image-section">
                <img src={property.image} alt={property.name} />
                <div className="location-overlay">
                    <p>{property.address}</p>
                </div>
                <div className="labels">
                    {property.isFeatured && <span className="label featured">Featured</span>}
                    <span className="label for-sale">For Sale</span>
                </div>
            </div>

            {/* Details Section */}
            <div className="property-details">
                <h3 className="name">{property.name}</h3>
                <div className="info">
                    <span>
                        <i className="fa-solid fa-bed"></i> Beds: {property.beds}
                    </span>
                    <span>
                        <i className="fa-solid fa-bath"></i> Baths: {property.baths}
                    </span>
                    <span>
                        <i className="fa-solid fa-square"></i> Sqft: {property.sqft}
                    </span>
                    {/* Added Type Field */}
                    <span style={{
                        marginLeft: "7px",
                        color: "blue"
                    }}>
                        <i className="fa-solid fa-tags"></i> Type: {property.type || "N/A"}
                    </span>
                </div>
            </div>

            {/* Footer Section */}
            <div className="footer">
                <div className="agent">
                    <img src={property.agentImage}  />
                    <p>{property.agentName}</p>
                </div>
                <p className="price">${property.price.toLocaleString()}</p>
            </div>
        </div>
    );
};
export default PropertyCard;