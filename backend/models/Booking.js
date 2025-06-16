import mongoose from "mongoose";

 const bookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', requred: true },
    listing: { type : mongoose.Schema.Types.ObjectId, ref: 'Listing', required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    totalPrice: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
    createdAt: {type: Date, default: Date.now }
 });

 const Booking = mongoose.models.booking || mongoose.model('booking', bookingSchema);

 export default Booking