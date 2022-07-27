import React from 'react'

const TodayForecast: React.FC<any> = ({forecast, location}) => {
    

    const localtime = location.localtime;
    const day = localtime.slice(8,10);
    const month = localtime.slice(5,7);
    const date = `${day}/${month}`;

  return (
    <div>   
        <div className='mb-8'>
            <h1 className='text-7xl font-bold'>{location.name}, <span className='text-xl font-light'>{date}</span></h1>
        </div>
        <div className='bg-white text-main-blue w-[25rem] lg:w-[40rem] h-[17rem] rounded-lg gap-2 '>
            <h2 className='font-bold text-2xl text-center py-6'>Como está o tempo hoje?</h2>
            <div className='flex flex-row justify-center items-center text-center overflow-x-scroll gap-2'>
                {forecast.forecastday[0].hour.map((item: any) => (
                <div key={item.time} className='flex flex-col gap-3 bg-zinc-100 p-4 rounded-lg'>
                    <img src={item.condition.icon} width={40}></img>
                    <p className='text-3xl font-bold  after:content-[""] after:w-full after:h-0.5 after:bg-current after:block after:mt-2'>{parseInt(item.temp_c)}<span className='align-super text-base'>ºC</span></p>
                    <p>{item.time.slice(11)}</p>
                </div>    
                ))}
            </div>
        </div>
    </div>
    )   
}

export default TodayForecast