import React from 'react'
import { formatToLocation } from '../service/getFormattedWeatherData'

function Date({ weather: { dt, timezone, name, country}}) {
  return (
    <div>
    <div className='date flex items-center justify-center my-6'>
        <p className='text-white text-xl font-extralight'>
         {formatToLocation(dt, timezone)}
        </p>
        </div>

        <div className='country flex items-center justify-center my-3'>
     <p className='text-white text-3xl font-medium'>
       {`${name}, ${country}`} 
     </p>
        </div>
        </div>
  )
}

export default Date