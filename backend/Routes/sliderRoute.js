import { Router } from 'express'
import { createSlide, deleteSlide, getAllSlide, updateSlide } from '../Controller/sliderController.js';


const router = Router();


router.route('/create-slide').post(createSlide);
router.route('/get-all-slide').get(getAllSlide);
router.route('/slide/:id').get(createSlide);
router.route('/delete-slide').delete(deleteSlide);
router.route('/update-slide').put(updateSlide);


export default router;