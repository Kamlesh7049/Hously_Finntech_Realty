import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import axiosInstance from "../../Helper/axiosInstance";

// Initial State
const initialState = {
    isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
    role: localStorage.getItem("role") || "",
    data: JSON.parse(localStorage.getItem("data")) || {},
};

// Create Account
export const createAccount = createAsyncThunk("/signup", async (data, { rejectWithValue }) => {
    try {
        const res = await axiosInstance.post("/auth/user/signup", data);
        toast.success(res?.data?.msg || "Account created successfully!");
        console.log(res)

        return res.data;
    } catch (error) {
        toast.error(error?.response?.data?.message || "Failed to create account");
        return rejectWithValue(error?.response?.data);
    }
});

// Login User
export const loginUser = createAsyncThunk("/login/user", async (data, { rejectWithValue }) => {
    try {
        const res = await axiosInstance.post("/auth/login/user", data);
        toast.success(res?.data?.msg || "Login successful!");
        return res.data;
    } catch (error) {
        toast.error(error?.response?.data?.message || "Failed to login");
        return rejectWithValue(error?.response?.data);
    }
});

// Login Admin
export const loginAdmin = createAsyncThunk("/login/admin", async (data, { rejectWithValue }) => {
    try {
        const res = await axiosInstance.post("/auth/login/admin", data);
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
        return res.data;
    } catch (error) {
        toast.error(error?.response?.data?.message || "Failed to logout");
        return rejectWithValue(error?.response?.data);
    }
});

// Update Profile
export const updateProfile = createAsyncThunk("/user/update/profile", async (data, { rejectWithValue }) => {
    try {
        const [userId, updatedData] = data; // ✅ Destructuring fixed
        const res = await axiosInstance.put(`/auth/update/${userId}`, updatedData);
        toast.success("Profile updated successfully!");
        return res.data;
    } catch (error) {
        toast.error(error?.response?.data?.msg || "Failed to update profile");
        return rejectWithValue(error?.response?.data);
    }
});

// Get User Data
export const getUserData = createAsyncThunk("/user/details", async (_, { rejectWithValue }) => {
    try {
        const res = await axiosInstance.get("/auth/me");
        return res.data;
    } catch (error) {
        toast.error("Failed to fetch user data");
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
            // ✅ Handle Successful Registration
            .addCase(createAccount.fulfilled, (state, action) => {
                if (!action?.payload?.user) return;

                // Save user data in localStorage
                localStorage.setItem("data", JSON.stringify(action?.payload?.user));
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("role", action?.payload?.user?.role);

                // Update Redux state
                state.isLoggedIn = true;
                state.data = action?.payload?.user;
                state.role = action?.payload?.user?.role;
            })

            .addCase(loginUser.fulfilled, (state, action) => {
                localStorage.setItem("data", JSON.stringify(action?.payload?.user));
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("role", action?.payload?.user?.role);
                state.isLoggedIn = true;
                state.data = action?.payload?.user;
                state.role = action?.payload?.user?.role;
            })
            .addCase(loginUser.rejected, (state) => {
                state.isLoggedIn = false;
                state.data = {};
                state.role = "";
            })
            .addCase(logout.fulfilled, (state) => {
                localStorage.removeItem("data");
                localStorage.removeItem("isLoggedIn");
                localStorage.removeItem("role");
                state.isLoggedIn = false;
                state.data = {};
                state.role = "";
            })
            .addCase(getUserData.fulfilled, (state, action) => {
                if (!action?.payload?.user) return;
                localStorage.setItem("data", JSON.stringify(action?.payload?.user));
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("role", action?.payload?.user?.role);
                state.isLoggedIn = true;
                state.data = action?.payload?.user;
                state.role = action?.payload?.user?.role;
            })
            .addCase(getUserData.rejected, (state) => {
                state.isLoggedIn = false;
                state.data = {};
                state.role = "";
            });
    },
});


export default authSlice.reducer;
