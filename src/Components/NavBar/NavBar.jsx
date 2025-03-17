import './NavBar.css'
import logo from "../../assets/img.png"
import person from "../../assets/signin.png"
import submit from "../../assets/submit.png"
import logout from "../../assets/logout.png"

import {useEffect, useState} from "react";

const NavBar = ({setLogin, customLoginResponse}) => {
    const [isLogin, setIsLogin] = useState(true);
    const [loginButtonStatus, setLoginButtonStatus] = useState();
    const [roles, setRoles] = useState([]);
    const setterLogin = () => {
        setIsLogin(!isLogin)
    }
    useEffect(() => {
        if (customLoginResponse.responseCode === "200") {
            setLoginButtonStatus(false);
            console.log("login button status" + loginButtonStatus)
        } else {
            setLoginButtonStatus(true)
        }
    }, [customLoginResponse])

    useEffect(() => {
        let results = customLoginResponse?.results;

        if (typeof results === "string") {
            setRoles(results.split(","))
        } else {
            setRoles([])
        }

    }, [customLoginResponse])
    const isDisabled = roles.some(role => role.toLowerCase() === "role_client");

    useEffect(() => {
        setLogin(isLogin)
    }, [isLogin]);
    return (<div className={"nav-wrapper"}>

        <div className={"logo-wrapper"}>
            <img src={logo} alt={"Maskani"}/>
            <div className={"name-area"}>
                <div className={"maskani-p"}><p className={"maskani"}>Maskani</p></div>
                <div className={"homes-p"}><p className={"maskani"}>search homes</p></div>
            </div>
        </div>
        <div className={"nav-links"}>
            <li className={"home"}>Home</li>
            <li className={"properties"}>Properties</li>
            <li className={"about"}>About</li>
            <li className={"careers"}>Careers</li>
            <li className={"Pricing"}>Pricing</li>
            <li className={"contacts"}>Contacts</li>
        </div>
        <div className={"btns"}>
            {loginButtonStatus ? (<button className="btn-siginIn"
                                          onClick={setterLogin}
                >
                    <img src={person} alt="icon" width="25" height="25"/>
                    <p> Sign in</p>
                </button>
            ) : (
                <button className="btn-siginIn"
                        onClick={setterLogin}
                >
                    <img src={logout} alt="icon" width="25" height="25"/>
                    <p>log out</p>
                </button>
            )}

            <button className="btn-submit-property"
                    disabled={isDisabled}
            >
                <img src={submit} alt="icon" width="20" height="20"/>
                <p>submit property </p>
            </button>

        </div>
    </div>);
}
export default NavBar;