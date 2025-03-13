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
                {action === "Sign Up" && (
                    <div className="input">
                        <img src={user_icon} alt="User Icon" width="17" height="15" />
                        <input type="text" placeholder="Enter Name" />
                    </div>
                )}

                <div className="input">
                    <img src={email_icon} alt="Email Icon" width="15" height="14" />
                    <input type="email" placeholder="Enter E-mail" />
                </div>

                <div className="input">
                    <img src={password_icon} alt="Password Icon" width="17" height="15" />
                    <input type="password" placeholder="Enter Password" />
                </div>
            </div>

            {/* Login/Sign Up Button */}
            <button className={`buttons ${action === "Login" ? "gray" : ""}`} onClick={() => setAction(action === "Login" ? "Sign Up" : "Login")}>
                {action}
            </button>

            {/* Conditional Display for "Forgot Password" or "Already have an account?" */}
            {action === "Sign Up" ? (
                <div className="already">Already have an account?</div>
            ) : (
                <div className="forgot-password">Do not have an account?</div>
            )}

            {/* Toggle between Login and Signup */}
            <div className="submit-container">
                {action === "Login" ? (
                    <div className="sign" onClick={() => setAction("Sign Up")}>Sign Up</div>
                ) : (
                    <div className="login" onClick={() => setAction("Login")}>Login</div>
                )}
            </div>
        </div>
    );
};

export default LoginSignUp;
