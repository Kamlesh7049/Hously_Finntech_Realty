
import { Schema, model } from 'mongoose'


const sliderShema = new Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
    },
    desc: {
        type: String,
        required: true
    }
}, {
    timestamps: true

})



const Slider = model("slider", sliderShema);

export default Slider;