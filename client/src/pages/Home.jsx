import React from 'react'
import SearchBar from '../components/SearchBar'
import MostBooked from '../components/MostBooked';

const Home = () => {
  const handleSearch = (searchData) => {
    console.log('Search data:', searchData);
    // Handle search functionality here
  };

  return (
    <div className='mt-30'>
        <SearchBar onSearch={handleSearch}/>
        <MostBooked/>
    </div>
  )
}

export default Home