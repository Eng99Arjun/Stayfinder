import Booking from '../models/Booking.js'
import Listing from '../models/Listing.js';

// @desc Create new booking
// @route POST /api/bookings

const createBooking = async (req, res) => {
    try {
        const { listingId, startDate, endDate } = req.body;
        const listing = await Listing.findById(listingId);

        if(!listing){
            return res.status(404).json({ message: 'Listing not found' });
        }

        // check for date conflicts

        const existing

    } catch (error) {
        
    }
}