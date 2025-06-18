import express from 'express';
import { createListing, getListingById, getListings, updateListing } from '../controllers/listingController.js';
import { isHost, protect } from '../middleware/auth.js';

const listingRouter = express.Router();

    listingRouter.route('/')
        .get(getListings)
        .post(protect, isHost, createListing);

    listingRouter.route('/:id')
        .get(getListingById)
        .put(protect, isHost, updateListing);

export default listingRouter;
 