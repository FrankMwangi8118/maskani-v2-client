import { useState, useEffect } from "react";
import "./Landing.css";
import landing from "../../assets/landing.jpg";
import axios from "axios";
import NavBar from "../../Components/NavBar/NavBar.jsx";

const words = ["Dream Home", "Perfect Home"];

const Landing = ({getFilterUrl,getFilteredUnits}) => {
    const BASE_URL = `http://localhost:8081/maskani/api/v1/report`;

    const [unitType, setUnitType] = useState("");
    const [county, setCounty] = useState("");
    const [subCounty, setSubCounty] = useState("");
    const [minPrice, setMinPrice] = useState(null);
    const [maxPrice, setMaxPrice] = useState(null);

    const [filteredUnits,setFilteredUnits]=useState([]);

    const [wordIndex, setWordIndex] = useState(0);
    const [isFlipping, setIsFlipping] = useState(false);
    const [open, setOpen] = useState(false);
    const [page,setPageNo]=useState("0");

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFlipping(true);
            setTimeout(() => {
                setWordIndex((prev) => (prev + 1) % words.length);
                setIsFlipping(false);
            }, 600); // Smooth transition
        }, 3000); // Change every 3s

        return () => clearInterval(interval);
    }, []);

    // Handle form submission for search with query params
    const handleSearch = () => {
        const params = {
            unitType,
            county,
            subCounty: subCounty || null,  // Convert empty strings to null
            minPrice: minPrice ? minPrice : null,
            maxPrice: maxPrice ? maxPrice : null
        };
        const filteredParams = Object.fromEntries(
            Object.entries(params).filter(([_, value]) => value !== null && value !== "")
        );

        const queryString = new URLSearchParams(filteredParams).toString();


        const searchUrl = queryString ? `${BASE_URL}?${queryString}` : BASE_URL;

        console.log(searchUrl);

        axios.get(searchUrl)
            .then(response => {
                setFilteredUnits(response.data.results);
                getFilteredUnits(response.data.results);
            })
            .catch(error => console.error("Error fetching data:", error));

        getFilterUrl(searchUrl);
    };

    return (


        <div className="landing-wrapper">
            <div className="landing-img">
                <img src={landing} alt="Landing" />
            </div>

            <div className="landing-content">
                <h2 className="landing-text">
                    Find Your{" "}
                    <span className={`flip-text ${isFlipping ? "flip" : ""}`}>
            {words[wordIndex]}
          </span>
                </h2>
                <div className="landing-p">
                    <p className="p-text">
                        We are a real estate agency that will help you find the best
                        residence
                    </p>
                    <p className="p-text-overflow">
                        you dream of, let’s discuss for your dream house?
                    </p>
                </div>
                <div className="button">
                    <button className="forRent">For Rent</button>
                    <button className="forSale">For Sale</button>
                </div>
                <div className="filter-section">
                    <div className="filter1">
                        <div className="range-min">
                            <input
                                value={minPrice}
                                type="number"
                                placeholder="Min Price"
                                onChange={(e) => setMinPrice(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="filter2">
                        <div className="range-max">
                            <input
                                value={maxPrice}
                                type="number"
                                placeholder="Max Price"
                                onChange={(e) => setMaxPrice(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="filter3">
                        <div className="types">
                            <label htmlFor="dropdown">Type</label>
                            <div className="type">
                                <select
                                    value={unitType}
                                    onChange={(e) => setUnitType(e.target.value)}
                                >
                                    <option value="">Select</option>
                                    <option value="bedsitter">studio Apartment</option>
                                    <option value="1-Bedroom">1-bedroom</option>
                                    <option value="2-Bedroom">2-bedroom</option>
                                    <option value="4-bedroom">4-bedroom</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="filter4">
                        <div className="advanced-search">
                            <button onClick={() => setOpen(!open)} className="search">
                                Advanced Search
                            </button>
                        </div>
                    </div>
                </div>

                {/* Modal for Advanced Search */}
                {open && (
                    <div className="filter_modal">
                        <div className="modal-advanced">
                            {/* Modal Left */}
                            <div className="modal-left">
                                <div className="modalLeft-left">
                                    <p className="county">County</p>
                                    <input
                                        className="county-i"
                                        placeholder="County"
                                        onChange={(e) => setCounty(e.target.value)}
                                    />
                                </div>
                                <div className="modalLeft-right">
                                    <p className="subCounty">Sub-County</p>
                                    <input
                                        className="subCounty-i"
                                        placeholder="Sub-County"
                                        onChange={(e) => setSubCounty(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Modal Right */}
                            <div className="modal-right">
                                <div className="modalRight-left">
                                    <p className="type-p">Unit Type</p>
                                    <div className="type-modal">
                                        <select
                                            value={unitType}
                                            onChange={(e) => setUnitType(e.target.value)}
                                        >
                                            <option value="">Select</option>
                                            <option value="bedsitter">studio Apartment</option>
                                            <option value="1-Bedroom">1-bedroom</option>
                                            <option value="2-Bedroom">2-bedroom</option>
                                            <option value="4-bedroom">4-bedroom</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="modalRight-right">
                                    <p className="max-p">Max Rent</p>
                                    <input
                                        value={maxPrice}
                                        className="max-i"
                                        placeholder="Max Rent Price"
                                        onChange={(e) => setMaxPrice(e.target.value)}
                                    />
                                    <button className="search-modal-btn" onClick={handleSearch}>
                                        Search &rarr;
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className={"next-page-nav"}>

            </div>
        </div>
    );
};

export default Landing;
