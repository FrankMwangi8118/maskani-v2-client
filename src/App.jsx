import PropertyCard from "./Components/PropertyCard/PropertyCard.jsx";
import Landing from "./Pages/LandingPage/Landing.jsx";
import Service from "./Sevice/Service.jsx";
import Listing from "./Pages/Listing/Listing.jsx";
import {useState} from "react";
import landing from "./assets/landing.jpg"
const App = () => {

    const [allHouse,setAllHouse] = useState([]);

    const property =
    //     [{
    //     image: "https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGx1eHVyeSUyMGhvdXNlfGVufDB8fDB8fHww",
    //     isFeatured: true,
    //     address: "nakuru Ave, California, New York",
    //     name: "Casa Lomas De Machalí Machas",
    //     beds: 1,
    //     baths: 2,
    //     sqft: 1783,
    //     agentImage: "https://via.placeholder.com/30",
    //     agentName: "Arlene McCoy",
    //     price: 2541.0
    // },
    //         {
    //             image: "https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGx1eHVyeSUyMGhvdXNlfGVufDB8fDB8fHww",
    //             isFeatured: true,
    //             address: "nakuru Ave, California, New York",
    //             name: "Casa Lomaas De Machalí Machas",
    //             beds: 1,
    //             baths: 2,
    //             sqft: 1783,
    //             agentImage: "https://via.placeholder.com/30",
    //             agentName: "Arlene McCoy",
    //             price: 2541.0
    //         },{
    //         image: "https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGx1eHVyeSUyMGhvdXNlfGVufDB8fDB8fHww",
    //         isFeatured: true,
    //         address: "nakuru Ave, California, New York",
    //         name: "Casa Lomass De Machalí Machas",
    //         beds: 1,
    //         baths: 2,
    //         sqft: 1783,
    //         agentImage: "https://via.placeholder.com/30",
    //         agentName: "Arlene McCoy",
    //         price: 2541.0
    //     },{
    //         image: "https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGx1eHVyeSUyMGhvdXNlfGVufDB8fDB8fHww",
    //         isFeatured: true,
    //         address: "nakuru Ave, California, New York",
    //         name: "Casa Lomasss De Machalí Machas",
    //         beds: 1,
    //         baths: 2,
    //         sqft: 1783,
    //         agentImage: "https://via.placeholder.com/30",
    //         agentName: "Arlene McCoy",
    //         price: 2541.0
    //     },
            [{
            image: "https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGx1eHVyeSUyMGhvdXNlfGVufDB8fDB8fHww",
            isFeatured: true,
            address: "nakuru Ave, California, New York",
            name: "Casa Lomaops De Machalí Machas",
            beds: 1,
            baths: 2,
            sqft: 1783,
            agentImage: "https://placehold.co/600x400/png",
            agentName: "Arlene McCoy",
            price: 2541.0
        }
    ];
    return(
        <>

            <Landing/>
            <Service/>
            <Listing property={property}/>

            {/*{property.map((propp) => (*/}
            {/*    <PropertyCard key={propp.name} property={propp} />*/}
            {/*))}*/}

        </>
    );
}
export default App;