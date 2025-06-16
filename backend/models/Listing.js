import mongoose from "mongoose";

const listingSchema = new mongoose.Schema({
    title: { type: String, required: true},
    description: String,
    address: {
        street: String,
        city: String,
        state: String,
        zip: String,
        coordinates:{
            lat: Number,
            lng: Number
        }
    },

    price: {type: Number, required: true},
    amenities:[String],
    images: [String],
    host: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required :true },
    createdAt: { type: Date, default: Date.now  }
})

const Listing = mongoose.models.listing || mongoose.model('listing', listingSchema)

export default Listing;