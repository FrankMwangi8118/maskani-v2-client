import { useState, useEffect } from "react";
import "./Landing.css";
import landing from "../../assets/landing.jpg";

const words = ["Dream Home", "Perfect Home"];
const [maxPrice, setMaxPrice] = useState(0);

const setmax=(event)=>{
    event.preventDefault();
    setMaxPrice(event.target.value);
}

const Landing = () => {
    const [wordIndex, setWordIndex] = useState(0);
    const [isFlipping, setIsFlipping] = useState(false);

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
                        <div className="range-max"></div>

                        <button>hello</button>

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
                        <input type="number"/>

                    </div>
                </div>
            </div>


            </div>




    );
};

export default Landing;
