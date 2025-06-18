import express from 'express'
import { createBooking } from '../controllers/bookingController.js';
import { protect } from '../middleware/auth.js';


const bookingRouter = express.Router();


bookingRouter.route('/').post(protect, createBooking);

export default bookingRouter;