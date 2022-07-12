import React from 'react'

const CurrentWeather: React.FC<any> = ({current}) => {
  return (
    <div className='bg-main-blue w-[25rem] h-[22rem] p-6 relative mt-5 rounded-lg'>
        <div className='bg-white rounded-full w-16 absolute -top-7 left-[10rem]'>
            <img src={current.condition.icon}></img>
        </div>
       <div className='flex flex-col items-center'>
            <h2 className='text-white text-[11rem] font-extrabold m-0'>{current.temp_c}<sup className='text-[3rem] align-super'>ºC</sup></h2>
        </div>
        <div className='flex justify-between'>
            <p className='text-base font-medium text-white '> Sensação <br />de {parseInt(current.feelslike_c)}<span className='text-xs align-super'>ºC</span></p>
            <p  className='text-base font-medium text-white '>{current.condition.text}</p>
        </div>
    </div>
  )
}

export default CurrentWeather