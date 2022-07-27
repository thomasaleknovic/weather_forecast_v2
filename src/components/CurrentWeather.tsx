import React from 'react'

const CurrentWeather: React.FC<any> = ({current}) => {

  
  return (
    <div className='bg-main-blue w-[25rem] h-[35rem] p-6 relative mt-5 rounded-lg'>
        <div className='bg-white rounded-full w-[15rem] absolute -top-7 left-[5rem] p-2'>
            <div className='flex flex-row justify-center  items-center gap-10'>
            <img src={current.condition.icon} width={50}></img>
            <p  className='text-base font-medium text-[#8FD4E2]'>{current.condition.text}</p>
            </div>
        </div>
        <section className='mb-[6rem]'>
          <div className='flex flex-col items-center'>
              <h2 className='text-white text-[11rem] font-extrabold m-0'>{current.temp_c}<sup className='text-[3rem] align-super'>ºC</sup></h2>
              <p className='text-base font-extralight text-white -mt-8 bg-[#8fd4e2] py-2 px-4 rounded-full text-main-blue'> Sensação de {parseInt(current.feelslike_c)}<span className='text-xs align-super'>ºC</span></p>
          </div>
        </section>
        <section>
          <div className='flex flex-row justify-between border-b-2 border-[#8FD4E2] mb-4'>
            <p className='mb-2 text-[#8FD4E2]'>Humidade</p>
            <p className='mb-2'>{current.humidity}%</p>
          </div>
          <div className='flex flex-row justify-between  border-b-2 border-[#8FD4E2] mb-4'>
          <p className='mb-2 text-[#8FD4E2]'>Precipitação</p>
            <p>{current.precip_mm + "mm"}</p>
          </div>
          <div className='flex flex-row justify-between mb-4'>
          <p className='mb-2 text-[#8FD4E2]'>Ventos de até</p>
          <p>{current.wind_kph + "km/h"}</p>
          </div>
        </section>
    </div>
  )
}

export default CurrentWeather