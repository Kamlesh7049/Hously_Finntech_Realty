import React, { useState } from "react";
import { loginUser } from "../Redux/Slice/authSlice";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Signin({ setShowLogin }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [loginData, setLoginData] = useState({ userName: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLoginInput = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleLoginSubmit = async () => {
        if (!loginData.userName || !loginData.password) {
            setError("Please enter both username and password.");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const res = await dispatch(loginUser(loginData)).unwrap();
            if (res.success) {
                if (typeof setShowLogin === "function") {
                    setShowLogin(false); // Close modal safely
                }
                navigate("/user-dashboard");
            } else {
                setError(res.message || "Login failed, please try again.");
            }
        } catch (err) {
            setError(err.message || "An error occurred during login.");
        } finally {
            setLoading(false);
        }
    };

    const handleCloseLogin = () => {
        if (typeof setShowLogin === "function") {
            setShowLogin(false);
        }
        setLoginData({ userName: "", password: "" });
        setError("");
    };

    return (
        <div>
            <p style={{ marginBottom: "15px", color: "#6c757d" }}>Admin Area for managing your website</p>
            
            <div className="form-group mb-3">
                <label htmlFor="admin-userName" style={{ fontWeight: "500" }}>Username:</label>
                <input
                    type="text"
                    className="form-control"
                    name="userName"
                    value={loginData.userName}
                    onChange={handleLoginInput}
                    placeholder="Enter username"
                />
            </div>

            <div className="form-group">
                <label htmlFor="admin-password" style={{ fontWeight: "500" }}>Password:</label>
                <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={loginData.password}
                    onChange={handleLoginInput}
                    placeholder="Enter password"
                />
            </div>

            {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseLogin} disabled={loading}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleLoginSubmit} disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                </Button>
            </Modal.Footer>
        </div>
    );
}

export default Signin;
