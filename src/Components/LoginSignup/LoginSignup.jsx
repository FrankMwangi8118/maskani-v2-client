import { useState } from "react";
import user_icon from "../../assets/person.png";
import email_icon from "../../assets/email.png";
import password_icon from "../../assets/password.png";
import "./LoginSignup.css";

const LoginSignUp = () => {
    const [action, setAction] = useState("Login");

    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Login" ? null : (
                    <div className="input">
                        <img src={user_icon} alt="User Icon" width="17" height="15" />
                        <input type="text" placeholder="Enter Name" />
                    </div>
                )}

                <div className="input">
                    <img src={email_icon} alt="Email Icon" width="15" height="14"/>
                    <input type="email" placeholder="Enter E-mail" />
                </div>
                <div className="input">
                    <img src={password_icon} alt="Password Icon"  width="17" height="15"/>
                    <input type="password" placeholder="Enter Password" />
                </div>
            </div>
            <div>
                {action === "login" ? <button className={`buttons ${action === "Login" ? "gray" : ""}`} onClick={() => setAction("Sign Up")}>Login</button>
                    : (
                    <button className={`buttons ${action === "Login" ? "gray" : ""}`} onClick={() => setAction("Sign Up")}>Sign Up</button>
                )}
            </div>

            {action === "Sign Up" ? <div className={"already"}>already have an account?</div> : <div className="forgot-password">forgot Password?</div>}

            <div className="submit-container">
                {action === "Sign Up" ? null : (
                    <div className={`sign ${action === "Login" ? "gray" : ""}`} onClick={() => setAction("Sign Up")}>Sign Up</div>
                )}
                {/*<div className={`submit ${action === "Login" ? "gray" : ""}`} onClick={() => setAction("Sign Up")}>Sign Up</div>*/}
                {action === "Login" ? null : (
                    <div className={`login ${action === "Sign Up" ? "gray" : ""}`} onClick={() => setAction("Login")}>Login</div>
                )}
            </div>
        </div>
    );
}

export default LoginSignUp;
