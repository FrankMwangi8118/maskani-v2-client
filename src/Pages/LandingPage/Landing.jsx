import { useState, useEffect } from "react";
import "./Landing.css";
import landing from "../../assets/landing.jpg";
const words = ["Dream Home", "Perfect Home"];


const Landing = () => {

    const setmax=(event)=>{
        event.preventDefault();
        setMaxPrice(event.target.value);
    }
    const [maxPrice, setMaxPrice] = useState(0);

    const [wordIndex, setWordIndex] = useState(0);
    const [isFlipping, setIsFlipping] = useState(false);
    const [open,setOpen] = useState(true);
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

    return (
        <div className="landing-wrapper">
            <div className="landing-img">
                <img src={landing} alt="Landing" />
            </div>

            <div className="landing-content">
                <h2 className="landing-text">
                    Find Your
                    <span className={`flip-text ${isFlipping ? "flip" : ""}`}>
                        {words[wordIndex]}
                    </span>
                </h2>
                <div className="landing-p">
                    <p className="p-text">We are a real estate agency that will help you find the best residence </p>
                    <p className="p-text-overflow">you dream of, let’s discuss for your dream house?</p>
                </div>
                <div className="button">
                    <button className="forRent">For Rent</button>
                    <button className="forSale">For sale</button>
                </div>
                <div className="filter-section">
                  <div className="filter1">

                      <div className="range-min">
                          <input
                          type="number"
                          placeholder="max-price"
                          onChange={setmax}
                          />
                      </div>

                      </div>

                    <div className="filter2">
                        <div className="range-max">
                            <input
                                type="number"
                                placeholder="max-price"
                                onChange={setmax}
                            />
                        </div>
                    </div>


                    <div className="filter3">
                        <div className="types">

                            <label htmlFor="dropdown">type</label>

                            <div className="type">
                                <select>
                                    <option></option>
                                    <option>Free</option>
                                    <option>Free</option>
                                    <option>Free</option>
                                    <option>Free</option>
                                </select>
                            </div>
                        </div>

                    </div>
                    <div className="filter4">
                        <div className="advanced-search">
                            <button
                                onClick={()=>setOpen(!open)}
                                className="search">
                                advanced search
                            </button>
                        </div>

                    </div>

                </div>

                <div className="filter_modal">
                    {open?(
                        <div className="modal-advanced">
                            {/*modal-left*/}
                            <div className="modal-left">
                                <div className="modalLeft-left">
                                   <p className="county">county</p>
                                    <input
                                        className="county-i"
                                        placeholder="county"

                                    />

                                </div>
                                <div className="modalLeft-right">
                                   <p className="subCounty">sub-county</p>
                                    <input
                                        className="subCounty-i"
                                        placeholder={"subcounty"}
                                    />

                                </div>
                            </div>
                            {/*modal-right*/}
                            <div className="modal-right">
                                <div className="modalRight-left">
                                    <p className="type-p">type</p>
                                    <div className="type-modal">
                                        <select>
                                            <option></option>
                                            <option>Free</option>
                                            <option>Free</option>
                                            <option>Free</option>
                                            <option>Free</option>
                                        </select>
                                    </div>


                                </div>
                                <div className="modalRight-right">
                                    <p className={"max-p"}>max-rent</p>
                                    <input
                                        type={"number"}
                                        className={"max-i"}
                                        placeholder={"max-rent-price"}
                                    />
                                    <button className="search-modal-btn">search -&gt; </button>

                                </div>

                            </div>




                        </div>
                    ):(<>

                    </>)}


                </div>

            </div>


            </div>




    );
};

export default Landing;
