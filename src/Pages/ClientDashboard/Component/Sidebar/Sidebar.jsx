import "./Sidebar.css"
import dashboard from "../../../../assets/dashboard.png"
import dash from "../../../../assets/dash.png"
import profileSetting from "../../../../assets/profile.png"
import property from "../../../../assets/property.png"
import propertManagement from "../../../../assets/propertyManagement.png"
import reviews from "../../../../assets/reviews.png"
import messages from "../../../../assets/message.png"

const Sidebar = ({selected, setSelected}) => {

    const sideBarData = [
        {
            "icon": dash,
            "label": "Dashboard",
        },
        {
            "icon": profileSetting,
            "label": "Profile",
        },
        {
            "icon": property,
            "label": "My properties",
        }
        ,
        {
            "icon": propertManagement,
            "label": "property management",
        },
        {
            "icon": reviews,
            "label": "reviews",
        },
        {
            "icon": messages,
            "label": "messages",
        }


    ]


    let email = "frankmwangi8118@gmail.com"

    function initialLetterTimmer(email) {
        return email.trim().charAt(0).toUpperCase();
    }

    function emailAppender(email) {
        const atIndex = email.indexOf("@");
        const beforeAt = email.slice(0, atIndex + 1);
        return beforeAt + "....";
    }
    function update(labels) {
        setSelected(labels)
    }

    return (
        <>

            <div className={"side-bar"}>
                <div className={"side-bar-content"}>
                    <div className={"logo"}>
                        < div className={"logo-content"}>
                            <img src={dashboard} alt="logo"/>
                            <div className={"logo-dets"}>
                                <p>MASKANI</p>
                                <p className={"logo-dets"}>
                                    manage homes
                                </p>
                            </div>
                        </div>


                    </div>
                    <div className={"profile"}>
                        <div className={"profile-content"}>
                            <p className={"profile-p"}>Profile</p>
                            <div className={"profile-area"}>
                                <div className={"profile-pic"}>
                                    <p className={"profile-letter"}>{initialLetterTimmer(email)}</p>
                                </div>
                                <div className={"account-dets"}>
                                    <p className={"account-pp"}>Account</p>
                                    <p className={"email"}>{emailAppender(email)}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className={"menu"}>
                        <p className={"menu-p"}>Menu</p>
                        <div className={"listing-wrapper"}>

                            <div className={"menu-content"}>
                                {sideBarData.map((item, index) => (
                                    <div
                                        className={`menu-item ${selected === item.label ? "active" : ""}`}                                        key={index}
                                        onClick={() => update(item.label)}
                                    >
                                        <img
                                            src={item.icon}
                                            alt={item.label}
                                            className="menu-icon"
                                        />
                                        <p className="menu-label">{item.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>
            </div>


        </>
    );
}
export default Sidebar;