import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axiosInstance from "../../Helper/axiosInstance";

const initialState = {
    offers: [],
    offer: null,
    loading: false,
    error: null
};

// Create Offer
export const createOffer = createAsyncThunk("offer/create", async (data, { rejectWithValue }) => {
    try {
        const res = await axiosInstance.post("/api/offer/create-offer", data);
        toast.success(res?.data?.msg || "Offer created successfully!");
        return res.data;
    } catch (error) {
        toast.error(error?.response?.data?.message || "Failed to create offer");
        return rejectWithValue(error?.response?.data);
    }
});

// Get All Offers
export const getAllOffer = createAsyncThunk("offer/getAll", async (_, { rejectWithValue }) => {
    try {
        const res = await axiosInstance.get("/api/offer/get-all-offer");
        return res.data;
    } catch (error) {
        return rejectWithValue(error?.response?.data);
    }
});

// Get Single Offer
export const getOffer = createAsyncThunk("offer/getOne", async (id, { rejectWithValue }) => {
    try {
        const res = await axiosInstance.get(`/api/offer/offer/${id}`);
        return res.data;
    } catch (error) {
        return rejectWithValue(error?.response?.data);
    }
});

// Update Offer
export const updateOffer = createAsyncThunk("offer/update", async ({ id, data }, { rejectWithValue }) => {
    try {
        const res = await axiosInstance.put(`/api/offer/update-offer/${id}`, data);
        toast.success(res?.data?.msg || "Offer updated successfully!");
        return res.data;
    } catch (error) {
        toast.error(error?.response?.data?.message || "Failed to update offer");
        return rejectWithValue(error?.response?.data);
    }
});

// Delete Offer
export const deleteOffer = createAsyncThunk("offer/delete", async (id, { rejectWithValue }) => {
    try {
        const res = await axiosInstance.delete(`/api/offer/delete-offer/${id}`);
        toast.success(res?.data?.msg || "Offer deleted successfully!");
        return res.data;
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
            .addCase(createOffer.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createOffer.fulfilled, (state, action) => {
                state.loading = false;
                state.offers.push(action.payload); // Add the new offer to the list
            })
            .addCase(createOffer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(getAllOffer.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllOffer.fulfilled, (state, action) => {
                state.loading = false;
                state.offers = action.payload;
            })
            .addCase(getAllOffer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(getOffer.pending, (state) => {
                state.loading = true;
            })
            .addCase(getOffer.fulfilled, (state, action) => {
                state.loading = false;
                state.offer = action.payload;
            })
            .addCase(getOffer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(updateOffer.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateOffer.fulfilled, (state, action) => {
                state.loading = false;
                state.offers = state.offers.map((offer) =>
                    offer._id === action.payload._id ? action.payload : offer
                );
            })
            .addCase(updateOffer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

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
