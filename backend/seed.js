import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';
import Listing from './models/Listing.js';

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const seedUsers = [
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: '123456',
    isHost: true
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: '123456',
    isHost: false
  }
];

const seedListings = [
  {
    title: 'Beachfront Paradise',
    description: 'Stunning ocean views from this luxury beach house',
    address: {
      street: '123 Coastal Rd',
      city: 'Miami',
      state: 'FL',
      zip: '33101',
      coordinates: { lat: 25.7617, lng: -80.1918 }
    },
    price: 250,
    amenities: ['Pool', 'WiFi', 'Beach Access'],
    images: ['beach1.jpg', 'beach2.jpg']
  },
  {
    title: 'Mountain Cabin Retreat',
    description: 'Cozy cabin in the woods with mountain views',
    address: {
      street: '456 Forest Ln',
      city: 'Aspen',
      state: 'CO',
      zip: '81611',
      coordinates: { lat: 39.1911, lng: -106.8175 }
    },
    price: 180,
    amenities: ['Fireplace', 'Hiking Trails', 'Hot Tub'],
    images: ['cabin1.jpg', 'cabin2.jpg']
  }
];

const seedDB = async () => {
  await User.deleteMany({});
  await Listing.deleteMany({});
  
  const createdUsers = await User.insertMany(seedUsers);
  
  // Assign host to listings
  const listingsWithHost = seedListings.map(listing => ({
    ...listing,
    host: createdUsers[0]._id
  }));
  
  await Listing.insertMany(listingsWithHost);
  
  console.log('Database seeded!');
  mongoose.connection.close();
};

seedDB();