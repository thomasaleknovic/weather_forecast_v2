import React from 'react'
import CurrentWeather from './CurrentWeather';
import TodayForecast from './TodayForecast';
import NextDays from './NextDays';

const WeatherInterface: React.FC<any> = ({data}) => {

  const location = data.location
  const current = data.current
  const forecast = data.forecast;

  return (
    <div className='flex flex-row justify-between items-end p-16'>
      <CurrentWeather current={current}/>
      <div className='flex flex-col'>
        <TodayForecast forecast={forecast} location={location}/>
        <NextDays forecast={forecast}/>
      </div>
    </div>
  )
}

export default WeatherInterface