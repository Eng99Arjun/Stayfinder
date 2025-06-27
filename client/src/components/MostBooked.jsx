import React from 'react'
import { useAppContext } from '../context/AppContext'
import ListingCard from './ListingCard';

const MostBooked = () => {

    const listings = [
      {
        id: 1,
        name: "Luxury Downtown Apartment",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        rating: 4.8,
        description: "Modern apartment in the heart of downtown with stunning city views. Perfect for business travelers and urban explorers.",
        price: 129,
        isVacant: true,
        location: "New York, NY",
        bedrooms: 2,
        amenities: ["WiFi", "Kitchen", "TV", "AC"]
      },
      {
        id: 2,
        name: "Cozy Beach House",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        rating: 4.9,
        description: "Charming beach house just steps away from the ocean. Wake up to the sound of waves and enjoy breathtaking sunsets.",
        price: 185,
        isVacant: true,
        location: "Miami, FL",
        bedrooms: 3,
        amenities: ["WiFi", "Beach Access", "Pool", "Parking"]
      },
      {
        id: 3,
        name: "Mountain Cabin Retreat",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        rating: 4.7,
        description: "Rustic cabin nestled in the mountains. Perfect for a peaceful getaway with hiking trails and scenic views.",
        price: 95,
        isVacant: true,
        location: "Aspen, CO",
        bedrooms: 2,
        amenities: ["WiFi", "Fireplace", "Hot Tub", "Hiking"]
      },
      {
        id: 4,
        name: "Historic Boutique Hotel",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        rating: 4.6,
        description: "Elegant boutique hotel in a restored historic building. Experience luxury with old-world charm and modern amenities.",
        price: 220,
        isVacant: true,
        location: "Boston, MA",
        bedrooms: 1,
        amenities: ["WiFi", "Concierge", "Spa", "Restaurant"]
      },
      {
        id: 5,
        name: "Desert Oasis Villa",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        rating: 4.9,
        description: "Stunning villa surrounded by desert landscape. Features a private pool and panoramic views of the surrounding mountains.",
        price: 275,
        isVacant: true,
        location: "Scottsdale, AZ",
        bedrooms: 4,
        amenities: ["WiFi", "Pool", "Spa", "Golf Course"]
      },
      {
        id: 6,
        name: "Urban Loft Studio",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        rating: 4.5,
        description: "Industrial-style loft in trendy neighborhood. High ceilings, exposed brick, and modern amenities make this a unique stay.",
        price: 115,
        isVacant: true,
        location: "Chicago, IL",
        bedrooms: 1,
        amenities: ["WiFi", "Kitchen", "Gym", "Rooftop"]
      },
      {
        id: 7,
        name: "Lakefront Cottage",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        rating: 4.8,
        description: "Peaceful cottage on a pristine lake. Perfect for fishing, kayaking, and enjoying nature's tranquility.",
        price: 145,
        isVacant: false,
        location: "Lake Tahoe, CA",
        bedrooms: 2,
        amenities: ["WiFi", "Kayaks", "Fireplace", "Deck"]
      },
      {
        id: 8,
        name: "City Center Penthouse",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        rating: 4.9,
        description: "Luxurious penthouse with panoramic city views. Premium location with access to the best restaurants and entertainment.",
        price: 350,
        isVacant: true,
        location: "Los Angeles, CA",
        bedrooms: 3,
        amenities: ["WiFi", "Balcony", "Concierge", "Valet"]
      }
    ]

  return (
    <div className='mt-16 ml-4 mr-4'>
        <p className='text-2xl md:text-3xl font-medium'>Most Booked</p>
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-3 md:gap-6 lg:grid-cols-3 mt-6'>
            {listings.filter((listing) => listing.isVacant).map((listing, index) => (
                <ListingCard key={index} listing={listing}/>
            ))}
        </div>
    </div>
  )
}

export default MostBooked