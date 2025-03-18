import './NavBar.css';
import logo from "../../assets/img.png";
import person from "../../assets/signin.png";
import submit from "../../assets/submit.png";
import logout from "../../assets/logout.png";
import { useEffect, useState } from "react";
import Service  from "../../Sevice/Service.jsx";

const NavBar = ({ setLogin, customLoginResponse }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [loginButtonStatus, setLoginButtonStatus] = useState(true);
    const [roles, setRoles] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);  // FIX: Use useState for re-renders
    const [logoutStatus,setLogoutStatus]=useState();

    const handleLogout= async () => {
        const response = await Service.logoutCall();
        console.log("from navbar " + response.responseDescription);
        if (response.responseCode==="200"){
            setLogoutStatus(true)
        }else{
            setLogoutStatus(false)
        }
    }
    useEffect(() => {
        if (logoutStatus){
            setRoles([])
            setLoginButtonStatus(true)
        }
    }, [logoutStatus]);

    const setterLogin = () => {
        setIsLogin(!isLogin);
    };

    useEffect(() => {
        if (customLoginResponse?.responseCode === "200") {
            setLoginButtonStatus(false);
        } else {
            setLoginButtonStatus(true);
        }
    }, [customLoginResponse]);

    useEffect(() => {
        console.log("Login button status:", loginButtonStatus);
    }, [loginButtonStatus]);

    useEffect(() => {
        let results = customLoginResponse?.results;
        console.log("Raw API results:", results);

        if (typeof results === "string") {
            let parsedRoles = results.replace(/\[|\]/g, "").split(",");
            setRoles(parsedRoles.map(role => role.trim().replace(/"/g, "")));
        } else {
            setRoles([]);
        }
    }, [customLoginResponse]);

    useEffect(() => {
        setIsDisabled(roles.some(role => role.toLowerCase() === "role_client"));
        console.log("Processed Roles:", roles);
        console.log("isDisabled:", isDisabled);
    }, [roles]);

    useEffect(() => {
        if (typeof setLogin === "function") {
            setLogin(isLogin);
        }
    }, [isLogin, setLogin]);

    return (
        <div className="nav-wrapper">
            <div className="logo-wrapper">
                <img src={logo} alt="Maskani" />
                <div className="name-area">
                    <div className="maskani-p"><p className="maskani">Maskani</p></div>
                    <div className="homes-p"><p className="maskani">Search homes</p></div>
                </div>
            </div>
            <div className="nav-links">
                <li className="home">Home</li>
                <li className="properties">Properties</li>
                <li className="about">About</li>
                <li className="careers">Careers</li>
                <li className="pricing">Pricing</li>
                <li className="contacts">Contacts</li>
            </div>
            <div className="btns">
                {loginButtonStatus ? (
                    <button className="btn-siginIn" onClick={setterLogin}>
                        <img src={person} alt="icon" width="25" height="25" />
                        <p> Sign in</p>
                    </button>
                ) : (
                    <button className="btn-siginIn" onClick={handleLogout}>
                        <img src={logout} alt="icon" width="25" height="25" />
                        <p>Log out</p>
                    </button>
                )}
                <button className="btn-submit-property" disabled={!isDisabled}>
                    <img src={submit} alt="icon" width="20" height="20" />
                    <p>Submit property</p>
                </button>
            </div>
        </div>
    );
};

export default NavBar;
