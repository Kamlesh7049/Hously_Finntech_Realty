import React from 'react'

function Signin() {

    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
    });

    // Handle Input for Login Form
    const handleLoginInput = (e) => {
        const { name, value } = e.target;
        setLoginData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle Login Submission (Dummy)
    const handleLoginSubmit = () => {
        console.log("Admin Login Attempt:", loginData);
        toast.success("Admin login successful (dummy function)");
        handleCloseLogin();
    };

    // Close Login Modal and Reset State
    const handleCloseLogin = () => {
        setShowLogin(false);
        setLoginData({ username: "", password: "" });
    };


    return (
        <div>
            <p style={{ marginBottom: "15px", color: "#6c757d" }}>Admin Area for managing your website</p>
            <div className="form-group mb-3">
                <label htmlFor="admin-username" style={{ fontWeight: "500" }}>Username:</label>
                <input type="text" className="form-control" value={loginData.username} name="username" onChange={handleLoginInput} placeholder="Enter username" />
            </div>
            <div className="form-group">
                <label htmlFor="admin-password" style={{ fontWeight: "500" }}>Password:</label>
                <input type="password" className="form-control" value={loginData.password} name="password" onChange={handleLoginInput} placeholder="Enter password" />
            </div>
        </div>
    )
}

export default Signin
