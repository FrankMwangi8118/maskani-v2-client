import PropertyManagement from "../../../../assets/propertyManagement.png"
import Review from "../../../../assets/review.png"
import Pending from "../../../../assets/pending.gif"
import "./Dashboard.css"
import House from "../../../../assets/landing.jpg"

const Dashboards = () => {
    const buildingData = [
        {
            "image": House,
            "buildingName": "mwas apartments",
            "location": "lumumba drive",
            "addedOn": "12.12.2025",
            "totalUnits": 23,
            "vacant": 2
        },
        {
            "image": House,
            "buildingName": "mwas apartments",
            "location": "lumumba drive",
            "addedOn": "12.12.2025",
            "totalUnits": 79,
            "vacant": 13
        },
        {
            "image": House,
            "buildingName": "mwas apartments",
            "location": "lumumba drive",
            "addedOn": "12.12.2025",
            "totalUnits": 22,
            "vacant": 11
        },
        {
            "image": House,
            "buildingName": "mwas apartments",
            "location": "lumumba drive",
            "addedOn": "12.12.2025",
            "totalUnits": 42,
            "vacant": 12
        },
        {
            "image": House,
            "buildingName": "mwas apartments",
            "location": "lumumba drive",
            "addedOn": "12.12.2025",
            "totalUnits": 23,
            "vacant": 45
        }
    ]
    const data = [
        {
            "icon": PropertyManagement,
            "text": "BUILDINGS",
            "count": 100
        },
        {
            "icon": PropertyManagement,
            "text": "ALL UNITS",
            "count": 100
        },
        {
            "icon": Pending,
            "text": "PENDING",
            "count": 100
        },
        {
            "icon": Review,
            "text": "REVIEWS",
            "count": 100
        }
    ]
    return (
        <div className={"Wrapper"}>
            <div className={"card-rows"}>
                {data.map((item, index) => (
                    <div key={index} className={"top-icons"}>
                        <div className={"icon"}>
                            <img src={item.icon} alt={"all"}/>
                        </div>
                        <div className={"description"}>
                            <p className={"p-desc"}>{item.text}</p>
                            <div className={"count"}>{item.count}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={"__nav"}>
                <div className={"__subs"}>
                    <ul className={"mine"}>
                        <li className={"desc"}>description</li>
                        <li className={"listing"}>listing</li>
                        <li className={"action"}>action</li>
                    </ul>
                </div>
            </div>

            <div className={"grid-Wrapper"}>

                {buildingData.map((item, idx) => (
                    <div key={idx} className={"data-grid"}>
                        <div className={"data-left"}>
                            <div className={"building-image"}>
                                <img src={item.image} alt={"house"}/>
                            </div>
                            <div className={"data-right"}>
                                <p className={"__name"}>{item.buildingName}</p>
                                <p className={"__added"}>{item.addedOn}</p>
                                <p className={"__location"}>{item.location}</p>
                            </div>
                            <div className={"pending-units-desc"}>
                                <span className={"__rem"}>{item.vacant}<span
                                    className={"__total-units"}>/{item.totalUnits} <span
                                    className={"__rem-p"}>remaining</span></span></span>
                            </div>


                        </div>

                    </div>
                ))}
            </div>


        </div>


    );
}
export default Dashboards;