import { Schema, model } from "mongoose";

const offerSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
            trim: true,
        },
        desc: {
            type: String,
            required: [true, "Description is required"],
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const Offer = model("Offer", offerSchema);

export default Offer;
