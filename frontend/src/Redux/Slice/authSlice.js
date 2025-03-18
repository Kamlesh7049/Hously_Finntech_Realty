import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import axiosInstance from "../../Helper/axiosInstance";

// Initial State
const initialState = {
    isLoggedIn: localStorage.getItem("isLoggedIn") === "true", // ✅ Fixed boolean conversion
    role: localStorage.getItem("role") || "",
    data: (localStorage.getItem("data")) || {}, // ✅ Ensure stored data is properly parsed
};

// Create Account
export const createAccount = createAsyncThunk("/signup", async (data, { rejectWithValue }) => {
    try {
        const res = await axiosInstance.post("/auth/user/signup", data);
        toast.success(res?.data?.msg || "Account created successfully!");
        return res.data;
    } catch (error) {
        toast.error(error?.response?.data?.message || "Failed to create account");
        return rejectWithValue(error?.response?.data);
    }
});

// ✅ Added token storage for login
export const loginUser = createAsyncThunk("/login/user", async (data, { rejectWithValue }) => {
    try {
        const res = await axiosInstance.post("/auth/user/login", data);
        toast.success(res?.data?.msg || "Login successful!");
        return res.data;
    } catch (error) {
        toast.error(error?.response?.data?.message || "Failed to login");
        return rejectWithValue(error?.response?.data);
    }
});

// Logout User
export const logout = createAsyncThunk("/logout", async (_, { rejectWithValue }) => {
    try {
        const res = await axiosInstance.get("/auth/logout");
        toast.success(res?.data?.msg || "Logged out successfully!");

        // ✅ Remove tokens and user data on logout
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("data");
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("role");

        return res.data;
    } catch (error) {
        toast.error(error?.response?.data?.message || "Failed to logout");
        return rejectWithValue(error?.response?.data);
    }
});

// Auth Slice
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.fulfilled, (state, action) => {

                console.log(action.payload)
                // ✅ Store token and user data in localStorage
                localStorage.setItem("accessToken", action.payload.data.accessToken);
                localStorage.setItem("refreshToken", action.payload.data.refreshToken);
                localStorage.setItem("data", JSON.stringify(action.payload.data.user));
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("role", action.payload.data.user.role);

                state.isLoggedIn = true;
                state.data = action.payload.data.user;
                state.role = action.payload.data.user.role;
            })
            .addCase(loginUser.rejected, (state) => {
                state.isLoggedIn = false;
                state.data = {};
                state.role = "";
            })
            .addCase(logout.fulfilled, (state) => {
                state.isLoggedIn = false;
                state.data = {};
                state.role = "";
            });
    },
});

export default authSlice.reducer;
