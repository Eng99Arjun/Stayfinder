import Listing from "../models/Listing.js";

const getListings = async (req, res) => {
    try {
        const { location, minPrice, maxPrice} = req.query;
        let filters = {};

        if(location){
            filters['address.city'] = new RegExp(location, 'i');

        }

        if(minPrice || maxPrice){
            filters.price ={};
            if(minPrice) filters.price.$gte = minPrice;
            if(maxPrice) filters.price.$gte = maxPrice;
        }

        const listings = await Listing.find(filters).populate('host', 'name');
        res.json(listings);

    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

    // @desc Get single listing
    // @route  GET /api/listing/:id

    const getListingById = async (req, res) => {
        try {
            const listing = await Listing.findById(req.params.id).populate('host', 'name email');

            if(listing){
                res.json(listing);
            }else {
                res.status(404).json({ message: 'Listing not found' });
            }
        } catch (error) {
            res.status(500).json({message: "Server Error"});
        }
    };

    // @desc Create Listing 
    // @route POST /api/listings

    const createListing = async (req, res) => {
        try {
            const listing = new Listing({
                ...req.body,
                host: req.user._id
            });

            const createdListing = await listing.save();
            res.status(201).json(createdListing);
        } catch (error) {
            res.status(400).json({ message: 'Invalid listing data'});
        }
    };

    // @desc Update listing
    // @route PUT /api/listings/:id

    const updateListing = async (req, res) => {
        try {
             const listing = await Listing.findById(req.params.id);

             if(!listing){
                return res.status(404).json({ message: 'Listing not found'});
             }

             // verify host owns the listing
             if(listing.host.toString() !== req.user._id.toString()){
                return res.status(401).json({ message: 'Not authorised' });
             }

             Object.assign(listing, req.body);
             const updatedListing = await listing.save();
             res.json(updateListing);

        } catch (error) {
            res.status(400).json({ message: 'Invalid listing data' })
        }
    }

    module.exports = { 
        getListings, 
        getListingById, 
        createListing, 
        updateListing 
    };