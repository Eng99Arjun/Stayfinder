import Booking from '../models/Booking.js'
import Listing from '../models/Listing.js';

// @desc Create new booking
// @route POST /api/bookings

export const createBooking = async (req, res) => {
    try {
        const { listingId, startDate, endDate } = req.body;
        const listing = await Listing.findById(listingId);

        if(!listing){
            return res.status(404).json({ message: 'Listing not found' });
        }

        // check for date conflicts

        const existingBooking = await Booking.findOne({
            listing: listingId,
            $or: [
                { startDate: { $lte: endDate }, endDate: { $gte: startDate }}
            ]
        });

        if(existingBooking){
            return res.status(400).json({ message: 'Dates not available' });
        }

        // Calculatte price

        const days = Math.ceil((new Date(endDate) - new Date(startDate)) / (1000 * 60* 60 *24));
        const totalPrice = days * listing.price;

        const booking = new Booking({
            user: req.user._id,
            listing: listingId,
            startDate,
            endDate,
            totalPrice
        });

        const createdBooking = await booking.save();
        res.status(201).json(createdBooking);

    } catch (error) {
        res.status(400).json({ message: 'Invalid booking data' })
    }
}


