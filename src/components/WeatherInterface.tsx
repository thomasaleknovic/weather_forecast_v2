import React from 'react'
import CurrentWeather from './CurrentWeather';
import TodayForecast from './TodayForecast';

const WeatherInterface: React.FC<any> = ({data}) => {

  const location = data.location
  const current = data.current
  const forecast = data.forecast;



  return (
    <div className='flex flex-row justify-between items-end p-16'>
      <CurrentWeather current={current}/>
      <TodayForecast forecast={forecast} location={location}/>
    </div>
  )
}

export default WeatherInterface