import React, { useState } from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'

function Input({setQuery, units, setUnits}) {
  const [city, setCity] = useState("");

  function searchClick () {
    if (city !== "") {
    setQuery({ q: city });
    }
  }

  function unitChange (e) {
    const selectUnit = e.target.name;
    if (units !== selectUnit) {
      setUnits(selectUnit);
    }
  }

  function locationClick () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition ((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  }
  
  return (
    <div className='flex flex-row justify-center my-6'>
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
    <input 
    value={city}
    onChange={(e) => setCity(e.target.value)}
    type='text' placeholder='Search for city...' 
    className='searchInput text-xl font-light p-2 w-full shadow-xl placeholder:lowercase'
     />
    <UilSearch size={25} 
    className="icon text-white cursor-pointer transition ease-out hover:scale-125"
    onClick={searchClick}
    />
    <UilLocationPoint size={25} 
    className="icon text-white cursor-pointer transition ease-out hover:scale-125"
    onClick={locationClick}
    />
        </div>

       <div className='temp flex flex-row w-1/4 items-center justify-center'>
     <button name='metric' className='text-xl text-white font-light transition ease-out hover:scale-125' onClick={unitChange}>
     °C
     </button>
     <p className='text-xl text-white mx-1'>|</p>
     <button name='imperial' className='text-xl text-white font-light transition ease-out hover:scale-125' onClick={unitChange}>
     °F
     </button>
        </div> 
    </div>
  )
}

export default Input