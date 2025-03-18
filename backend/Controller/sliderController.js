import Slide from '../Model/sliderSchema.js';
import { ApiError } from '../utils/ApiError.js';
import { asyncHandler } from '../Utils/asyncHandler.js'

const createSlide = asyncHandler(async (req, res) => {
    try {
        // get the slide data 
        const { title, desc } = req.body;
        console.log(title, desc)
        // checck validation 
        if (!title || !desc) {
            throw new ApiError(400, "All filed are required")
        }
        // create slide 
        const slide = await Slide.create({
            title,
            desc
        })

        // chcekc slide is created or not 
        const createdSlide = await Slide.findById(slide._id);

        if (!createdSlide) {
            throw new ApiError(401, "Failed to create the slide");
        }

        //  send res 
        return res
            .status(200)
            .json(new ApiResponse(
                200,
                createSlide,
                "Slide created successfully"
            ));
    } catch (error) {
        throw new ApiError(400, error.message || "Failed to create the slide")
    }
})

const getAllSlide = asyncHandler(async (req, res) => {
    try {
        const allSlide = await Slide.find({})
        return res
            .status(200)
            .json(new ApiResponse(
                200,
                allSlide,
                "Slides Fetch successfully"
            ));
    } catch (error) {
        throw new ApiError(400, error.message || "Failed to fetch the slides")
    }

})

const getSlideById = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;

        const slide = await Slide.findById(id);

        if (!slide) {
            throw new ApiError(400, "Slide does not exist");
        }

        return res
            .status(200)
            .json(new ApiResponse(
                200,
                slide,
                "Slide Fetch successfully"
            ));
    } catch (error) {
        throw new ApiError(400, error.message || "Failed to fetch the slide")

    }
})


const updateSlide = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const { title, desc } = req.body;
        const updatedSlide = await Slide.findByIdAndUpdate(
            id,
            { $set: { title, desc } },
            { new: true }
        )
        return res
            .status(200)
            .json(new ApiResponse(
                200,
                updateSlide,
                "Slide update successfully"
            ));
    } catch (error) {
        throw new ApiError(400, error.message || "Failed to update the slide")
    }
})



const deleteSlide = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;

        const deltedSlide = await Slide.findByIdAndDelete(id);

        if (!deleteSlide) {
            throw new ApiError(400, "failed to delete the slide");

        }

        return res
            .status(200)
            .json(new ApiResponse(
                200,
                "Slide deleted successfully"
            ));

    } catch (error) {
        throw new ApiError(400, error.message || "Failed to delete the slide")

    }

})



export {
    createSlide,
    getAllSlide,
    getSlideById,
    updateSlide,
    deleteSlide
}