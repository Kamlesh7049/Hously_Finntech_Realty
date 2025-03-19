import Offer from "../Model/offerModel.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../Utils/ApiResponse.js";
import { asyncHandler } from "../Utils/asyncHandler.js";

const createOffer = asyncHandler(async (req, res) => {
    try {
        const { title, desc } = req.body;

        if (!title || !desc) {
            throw new ApiError(400, "All fields are required");
        }

        const offer = await Offer.create({ title, desc });

        return res
            .status(201)
            .json(new ApiResponse(201, offer, "Offer created successfully"));
    } catch (error) {
        throw new ApiError(400, error.message || "Failed to create the offer");
    }
});

const getAllOffer = asyncHandler(async (req, res) => {
    try {
        const allOffers = await Offer.find({});
        return res
            .status(200)
            .json(new ApiResponse(200, allOffers, "Offers fetched successfully"));
    } catch (error) {
        throw new ApiError(400, error.message || "Failed to fetch offers");
    }
});

const getOfferById = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const offer = await Offer.findById(id);

        if (!offer) {
            throw new ApiError(404, "Offer does not exist");
        }

        return res
            .status(200)
            .json(new ApiResponse(200, offer, "Offer fetched successfully"));
    } catch (error) {
        throw new ApiError(400, error.message || "Failed to fetch the offer");
    }
});

const updateOffer = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const { title, desc } = req.body;

        const updatedOffer = await Offer.findByIdAndUpdate(
            id,
            { $set: { title, desc } },
            { new: true, runValidators: true }
        );

        if (!updatedOffer) {
            throw new ApiError(404, "Offer not found");
        }

        return res
            .status(200)
            .json(new ApiResponse(200, updatedOffer, "Offer updated successfully"));
    } catch (error) {
        throw new ApiError(400, error.message || "Failed to update the offer");
    }
});

const deleteOffer = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;

        const deletedOffer = await Offer.findByIdAndDelete(id);

        if (!deletedOffer) {
            throw new ApiError(404, "Offer not found");
        }

        return res.status(200).json(new ApiResponse(200, null, "Offer deleted successfully"));
    } catch (error) {
        throw new ApiError(400, error.message || "Failed to delete the offer");
    }
});

export { createOffer, getAllOffer, getOfferById, updateOffer, deleteOffer };
