import React from 'react'

function TopButton({setQuery}) {
let cities = [
    {
        id: 1,
        title: "London", 
    },
    {
        id: 1,
        title: "Sydney", 
    },
    {
        id:1,
        title: "Toronto", 
    },
    {
        id:1,
        title: "Abuja", 
    },
    {
        id:1,
        title: "Paris", 
    },
];

  return (
    <div className='flex items-center justify-around my-6'>
       {cities.map((city, index) => {
return (
      <button key={index} className='popular text-white text-lg font-medium' onClick={() => setQuery({ q: city.title })}>{city.title}</button>
     )
       })}
    </div>
  )
}

export default TopButton