import { Router } from 'express'
import { createOffer, deleteOffer, getAllOffer, getOfferById, updateOffer, } from '../Controller/offerController.js';


const router = Router();


router.route('/create-offer').post(createOffer);
router.route('/get-all-offer').get(getAllOffer);
router.route('/offer/:id').get(getOfferById);
router.route('/update-offer/:id').put(updateOffer);
router.route('/delete-offer/:id').delete(deleteOffer);


export default router;