import PropertyManagement from "../../../../assets/propertyManagement.png"
import Review from "../../../../assets/review.png"
import Pending from "../../../../assets/pending.gif"
import "./Dashboard.css"
const Dashboards = () => {
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
            <div className={"card-row"}>
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
        </div>


    );
}
export default Dashboards;