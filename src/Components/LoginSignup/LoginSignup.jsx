import {useState} from "react";
import user_icon from "../../assets/person.png";
import email_icon from "../../assets/email.png";
import password_icon from "../../assets/password.png";
import "./LoginSignup.css";
import Service from "../../Sevice/Service.jsx";

const LoginSignUp = () => {
    const [action, setAction] = useState("Login");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("");
    const [username1, setUsername1] = useState("");
    const [responseMessage, setResponseMessage] = useState("");
    const [errors, setErrors] = useState({username: "", password: ""});

    // Email validation regex
    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // Handle input changes and show errors in real time
    const handleUsernameChange = (e) => {
        const value = e.target.value;
        setUsername(value);
        if (!isValidEmail(value)) {
            setErrors((prev) => ({...prev, username: "Invalid email format"}));
        } else {
            setErrors((prev) => ({...prev, username: ""}));
        }
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        if (value.length < 8) {
            setErrors((prev) => ({...prev, password: "must be at least 8 characters"}));
        } else {
            setErrors((prev) => ({...prev, password: ""}));
        }
    };

    const handleLogin = async () => {
        if (errors.username || errors.password) return; // Prevent API call if errors exist
        const userData = {username, password};

        try {
            const response = await Service.loginCall(userData);
            if (response.data && response.data.responseCode === "200") {
                setResponseMessage(response.data.responseDescription || "Login successful!");
                setStatus("success");
                setUsername("")
                setPassword("");


            } else {
                setResponseMessage("Wrong username or password");
                setStatus("error");
                setUsername("");
                setPassword("");
            }
        } catch (err) {
            console.error("Error:", err);
            setResponseMessage("Wrong username or password || account not activated");
            setStatus("error");
            setPassword("")

        }
    };

    const isLoginDisabled = errors.username || errors.password || username.trim() === "" || password.trim() === "";
    const isSignUpDisabled = username1.trim() === "" || errors.username || errors.password || username.trim() === "" || password.trim() === "";

    return (
        <div className="container">
            <div className="p-status">
                {status === "success" && <p className="p-success">{responseMessage} !!</p>}
                {status === "error" && <p className="p-error">{responseMessage}</p>}
            </div>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>

            <div className="inputs">
                {action === "Sign Up" && (
                    <div className="input">
                        <img src={user_icon} alt="User Icon" width="17" height="15"/>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            value={username1}
                            onChange={(e) => setUsername1(e.target.value)}
                        />
                    </div>
                )}

                <div className="input">
                    <img src={email_icon} alt="Email Icon" width="15" height="14"/>
                    <input
                        type="email"
                        placeholder="Enter E-mail"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                    {errors.username && <p className="error-text">{errors.username}</p>}
                </div>

                <div className="input">
                    <img src={password_icon} alt="Password Icon" width="17" height="15"/>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    {errors.password && <p className="error-text">{errors.password}</p>}
                </div>
            </div>


            {action === "Login" ?
                (<button className={`buttons ${action === "Login" ? "gray" : ""}`}
                         onClick={() => handleLogin()}
                         disabled={isLoginDisabled}
                >

                    {action}
                </button>) : (
                    <button className={`buttons ${action === "Login" ? "gray" : ""}`}
                            onClick={() => console.log("hi")}
                            disabled={isSignUpDisabled}
                    >
                        {action}
                    </button>
                )}

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
