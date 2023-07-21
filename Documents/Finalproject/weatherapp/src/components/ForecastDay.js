import React from 'react'
import { iconUrlFromCode } from '../service/getFormattedWeatherData'

function ForecastDay({title, items}) {
    return (
      <div>
          <div className='flex items-center justify-start my-6'>
      <p className='hour text-white font-medium uppercase'>
          {title}
          </p>
          </div>
          <hr className='hour my-2' />
  
          <div className='hour flex flex-row items-center justify-between text-white'>
              {items.map((item, index) => {
                return (
                <div className='flex flex-col items-center justify-center'>
                <p key={index} className='font-light text-sm'>
                    {item.title}
                </p>
                <img key={index} src={iconUrlFromCode(item.icon)} alt='' />
                <p key={index} className='font-medium'>{`${Math.round(item.temp_max)}°`} <span key={index} className='mr-2 text-red-500'>{`${Math.round(item.temp_min)}°`}</span></p> 
            </div>
                )
              })}
          </div>
      </div>
    )
  }
  
  export default ForecastDay