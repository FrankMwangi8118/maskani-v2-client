import './NavBar.css'
import logo from "../../assets/img.png"
import person from "../../assets/signin.png"
import submit from "../../assets/submit.png"
import {useEffect, useState} from "react";

const NavBar = ({setLogin}) => {
    const [isLogin,setIsLogin]=useState(false);
    const setterLogin=()=>{
        setIsLogin(!isLogin)
    }
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
            <button className="btn-siginIn"
            onClick={setterLogin }
            >
                <img src={person} alt="icon" width="25" height="25"/>
                <p> Sign in</p>
            </button>
            <button className="btn-submit-property"

            >
                <img src={submit} alt="icon" width="20" height="20"/>
                <p>submit property </p>
            </button>

        </div>
    </div>);
}
export default NavBar;