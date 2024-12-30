import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../custom_styles/login.css";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const isUsernameValid = USER_REGEX.test(username);
        const isPasswordValid = PWD_REGEX.test(password);

        if (!isUsernameValid) {
            setError("Invalid username. Must be 4-24 characters, start with a letter, and only contain letters, numbers, or underscores.");
            return;
        }

        if (!isPasswordValid) {
            setError("Invalid password. Must be 8-24 characters, include uppercase, lowercase, number, and special character.");
            return;
        }

        setError(null);
        setSuccess(true);

        // Simulate successful login
        setTimeout(() => {
            navigate("/products"); // Navigate to home page after successful login
        }, 1000);
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {error && <p className="error-message">{error}</p>}
                    {success && <p className="success-message">Login successful! Redirecting...</p>}
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
