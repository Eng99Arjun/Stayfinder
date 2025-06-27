import React from 'react'

const SearchBar = () => {
  return (
    <div className='w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center px-4 lg:px-5 py-4 lg:py-0 border-2 border-primary rounded-2xl lg:rounded-full bg-white shadow-lg lg:h-16'>
      
      {/* Stay Type Field */}
      <div className='w-full lg:w-auto flex-1 mb-3 lg:mb-0'>
        <input 
          type="text" 
          placeholder='Stay Type'
          list='stay-type'
          className='w-full lg:w-40 focus:outline-none px-2 py-2 lg:py-0 lg:ml-2 lg:mr-2 text-center lg:text-left'
        />
        <datalist id='stay-type'>
          <option value="Hotels"/>
          <option value="Flats"/>
          <option value="Apartments"/>
        </datalist>
      </div>

      {/* Separator */}
      <div className='hidden lg:block w-0.5 mr-1 bg-gray-300 h-8'></div>

      {/* Location Field */}
      <div className='w-full lg:w-auto flex-1 mb-3 lg:mb-0'>
        <input 
          type="text" 
          placeholder='Location'
          list='location'
          className='w-full lg:w-40 focus:outline-none px-2 py-2 lg:py-0 lg:ml-2 lg:mr-2 text-center lg:text-left'
        />
        <datalist id='location'>
          <option value="New York, NY"/>
          <option value="Los Angeles, CA"/>
          <option value="Chicago, IL"/>
          <option value="Miami, FL"/>
          <option value="Boston, MA"/>
        </datalist>
      </div>

      {/* Separator */}
      <div className='hidden lg:block w-0.5 mr-1 bg-gray-300 h-8'></div>

      {/* Check-In Field */}
      <div className='w-full lg:w-auto flex-1 mb-3 lg:mb-0'>
        <div className='text-center lg:text-left lg:ml-2 mb-1 lg:mb-0'>
          <label htmlFor="check-in" className='text-xs text-gray-500 font-medium'>Check-In</label>
        </div>
        <input 
          id="check-in"
          type="date" 
          placeholder='Check In'
          className='w-full lg:w-40 focus:outline-none text-gray-600 px-2 py-2 lg:py-0 lg:ml-2 lg:mr-2'   
        />
      </div>

      {/* Separator */}
      <div className='hidden lg:block w-0.5 mr-1 bg-gray-300 h-8'></div>

      {/* Check-Out Field */}
      <div className='w-full lg:w-auto flex-1 mb-3 lg:mb-0'>
        <div className='text-center lg:text-left lg:ml-2 mb-1 lg:mb-0'>
          <label htmlFor="check-out" className='text-xs text-gray-500 font-medium'>Check-Out</label>
        </div>
        <input 
          id="check-out"
          type="date" 
          placeholder='Check Out'
          className='w-full lg:w-40 focus:outline-none text-gray-600 px-2 py-2 lg:py-0 lg:ml-2 lg:mr-2'    
        />
      </div>

      {/* Separator */}
      <div className='hidden lg:block w-0.5 mr-1 bg-gray-300 h-8'></div>

      {/* Listing Name Field */}
      <div className='w-full lg:w-auto flex-1 mb-3 lg:mb-0'>
        <input 
          type="text" 
          placeholder='Listing Name (Optional)'
          list='listing-name'
          className='w-full lg:w-40 focus:outline-none px-2 py-2 lg:py-0 lg:ml-2 lg:mr-2 text-center lg:text-left'
        />
        <datalist id='listing-name'>
          <option value="Luxury Downtown Apartment"/>
          <option value="Cozy Beach House"/>
          <option value="Mountain Cabin Retreat"/>
        </datalist>
      </div>

      {/* Search Button */}
      <div className='w-full lg:w-auto'>
        <button className='w-full lg:w-auto bg-primary hover:bg-primary/90 text-white px-6 py-3 lg:py-2 rounded-full lg:rounded-lg transition-colors duration-300 flex items-center justify-center lg:mr-2'>
          {/* <img src="./src/assets/search-svgrepo-com.svg" alt="Search" className='h-5 w-5 mr-2 lg:mr-0 lg:h-6 lg:w-6 ' />  */}Search
          <span className='lg:hidden'>Search</span>
        </button>
      </div>

    </div>
  )
}

export default SearchBar