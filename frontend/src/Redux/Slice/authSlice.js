import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axiosInstance from "../../Helper/axiosInstance";

// Initial State
const initialState = {
    isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
    role: localStorage.getItem("role") || "",
    data: JSON.parse(localStorage.getItem("data")) || {},
    loading: false,
};

// ✅ Create Account
export const createAccount = createAsyncThunk("/signup", async (data, { rejectWithValue }) => {
    try {
        const res = await axiosInstance.post("/auth/user/signup", data);
        toast.success(res?.data?.msg || "Account created successfully! ✅");
        return res.data;
    } catch (error) {
        toast.error(error?.response?.data?.message || "Failed to create account ❌");
        return rejectWithValue(error?.response?.data);
    }
});

// ✅ Login User
export const loginUser = createAsyncThunk("/login/user", async (data, { rejectWithValue }) => {
    try {
        const res = await axiosInstance.post("/auth/user/login", data);
        toast.success(res?.data?.msg || "Login successful! 🎉");
        return res.data;
    } catch (error) {
        toast.error(error?.response?.data?.message || "Failed to login ❌");
        return rejectWithValue(error?.response?.data);
    }
});

// ✅ Logout User
export const logoutUser = createAsyncThunk("/logout", async (_, { rejectWithValue }) => {
    try {
        const res = await axiosInstance.get("/auth/user/logout");
        toast.success(res?.data?.msg || "Logged out successfully! ✅");

        // ✅ Remove user data from localStorage
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("data");
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("role");

        return res.data;
    } catch (error) {
        toast.error(error?.response?.data?.message || "Failed to logout ❌");
        return rejectWithValue(error?.response?.data);
    }
});

// ✅ Auth Slice
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Create Account
            .addCase(createAccount.pending, (state) => {
                state.loading = true;
            })
            .addCase(createAccount.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(createAccount.rejected, (state) => {
                state.loading = false;
            })

            // Login User
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;

                // ✅ Store user data in localStorage
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
                state.loading = false;
                state.isLoggedIn = false;
                state.data = {};
                state.role = "";
            })

            // Logout User
            .addCase(logoutUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.loading = false;
                state.isLoggedIn = false;
                state.data = {};
                state.role = "";
            })
            .addCase(logoutUser.rejected, (state) => {
                state.loading = false;
            });
    },
});

export default authSlice.reducer;

