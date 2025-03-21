import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axiosInstance from "../../Helper/axiosInstance";

const initialState = {
    offers: [],
    loading: false,
    error: null
};

// Create Offer
export const createOffer = createAsyncThunk("offer/create", async (data, { rejectWithValue }) => {
    try {
        const res = await axiosInstance.post("/api/offer/create-offer", data);
        toast.success(res?.data?.msg || "Offer created successfully!");
        return res.data.data; // ✅ Ensure correct return
    } catch (error) {
        toast.error(error?.response?.data?.message || "Failed to create offer");
        return rejectWithValue(error?.response?.data);
    }
});

// Get All Offers
export const getAllOffer = createAsyncThunk("offer/getAll", async (_, { rejectWithValue }) => {
    try {
        const res = await axiosInstance.get("/api/offer/get-all-offer");
        return res.data.data;
    } catch (error) {
        return rejectWithValue(error?.response?.data);
    }
});

// Delete Offer
export const deleteOffer = createAsyncThunk("offer/delete", async (id, { rejectWithValue }) => {
    try {
        const res = await axiosInstance.delete(`/api/offer/delete-offer/${id}`);
        toast.success(res?.data?.msg || "Offer deleted successfully!");
        return { success: true, id };
    } catch (error) {
        toast.error(error?.response?.data?.message || "Failed to delete offer");
        return rejectWithValue(error?.response?.data);
    }
});

const offerSlice = createSlice({
    name: "offer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllOffer.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllOffer.fulfilled, (state, action) => {
                state.loading = false;
                state.offers = action.payload; // ✅ Correct state update
            })
            .addCase(getAllOffer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Create Offer
            .addCase(createOffer.pending, (state) => {
                state.loading = true;
            })
            .addCase(createOffer.fulfilled, (state, action) => {
                state.loading = false;
                state.offers.push(action.payload); // ✅ Append new offer to list
            })
            .addCase(createOffer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Delete Offer
            .addCase(deleteOffer.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteOffer.fulfilled, (state, action) => {
                state.loading = false;
                state.offers = state.offers.filter((offer) => offer._id !== action.payload.id);
            })
            .addCase(deleteOffer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export default offerSlice.reducer;
