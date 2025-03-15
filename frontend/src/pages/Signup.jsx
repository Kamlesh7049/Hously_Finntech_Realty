import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createAccount } from "../Redux/Slice/authSlice";
import { toast } from "react-toastify"; // ✅ Import toast

const Signup = ({ setShowSignup }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [signupData, setSignupData] = useState({
        userName: "",
        email: "",
        password: "",
        mobileNumber: "",
    });

    // Handle Input for Sign-up Form
    const handleSignupInput = (e) => {
        const { name, value } = e.target;
        setSignupData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle Signup Submission
    const handleSignupSubmit = async (event) => {
        event.preventDefault();

        // Validation
        if (!signupData.email || !signupData.password || !signupData.userName || !signupData.mobileNumber) {
            toast.error("Please fill all the details");
            return;
        }
        if (signupData.userName.length < 5) {
            toast.error("userName should be at least 5 characters");
            return;
        }
        if (signupData.password.length < 6) {
            toast.error("Password must be at least 6 characters long");
            return;
        }

        // Form Submission
        const formData = {
            userName: signupData.userName,
            email: signupData.email,
            password: signupData.password,
            mobileNumber: signupData.mobileNumber,
        };

        try {
            const response = await dispatch(createAccount(formData)); // ✅ Await the dispatch action

            if (response?.payload?.success) {
                toast.success("Account created successfully!");
                navigate("/");
                setShowSignup(false); // ✅ Close the modal
            } else {
                toast.error(response?.payload?.message || "Signup failed");
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
            console.error(error);
        }

        // Reset Form
        setSignupData({
            userName: "",
            email: "",
            password: "",
            mobileNumber: "",
        });
    };

    return (
        <form onSubmit={handleSignupSubmit}>
            <div className="form-group mb-3">
                <label htmlFor="signup-userName" style={{ fontWeight: "500" }}>userName:</label>
                <input type="text" className="form-control" value={signupData.userName} name="userName" onChange={handleSignupInput} placeholder="Enter userName" />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="signup-email" style={{ fontWeight: "500" }}>Email:</label>
                <input type="email" className="form-control" value={signupData.email} name="email" onChange={handleSignupInput} placeholder="Enter email" />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="signup-mobile" style={{ fontWeight: "500" }}>Mobile Number:</label>
                <input type="text" className="form-control" value={signupData.mobileNumber} name="mobileNumber" onChange={handleSignupInput} placeholder="Enter mobile number" />
            </div>
            <div className="form-group">
                <label htmlFor="signup-password" style={{ fontWeight: "500" }}>Password:</label>
                <input type="password" className="form-control" value={signupData.password} name="password" onChange={handleSignupInput} placeholder="Enter password" />
            </div>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowSignup(false)}>Close</Button>
                <Button variant="primary" type="submit">Sign Up</Button>
            </Modal.Footer>
        </form>
    );
};

export default Signup;
