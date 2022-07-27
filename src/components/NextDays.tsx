import React from 'react'
// import Raindrop

const NextDays: React.FC<any> = ({forecast}) => {

    const newForecast = forecast.forecastday.slice(1, 3)
    
  return (
    <div className='border-2 rounded-md flex items-center flex-col p-5 mt-6'>
      <h2 className='text-center font-bold text-[1.5rem] mb-6'>Próximos dias</h2>
       <div className='flex flex-row gap-14'> 
            {newForecast.map((item: any) => {
                const localtime = item.date;
                const day = localtime.slice(8,10);
                const month = localtime.slice(5,7);
                const date = `${day}/${month}`;
                console.log(item)
                
            return( <div key={item.date_epoch} className='flex flex-col items-center bg-[#404040] p-3 rounded-md'>
                    <p className='font-bold text-sm mb-5 bg-white py-1 px-4 rounded-full text-[#333333]'>{date}</p>
                        <div className='flex flex-row gap-3'>
                            <div className='flex flex-row gap-4 border-r-2 px-2'>
                                <p className='text-[2.5rem] font-bold text-center leading-6'>{parseInt(item.day.mintemp_c)}<sup className='text-[1rem] align-super'>ºC</sup> <br /><span className='font-light text-base'>min.</span></p>
                                <p className='text-[2.5rem] font-bold text-center text leading-6'>{parseInt(item.day.maxtemp_c)}<sup className='text-[1rem] align-super'>ºC</sup><br /><span className='font-light text-base'>max.</span></p>
                            </div>
                            <div>
                                <p>{item.day.totalprecip_mm}mm</p>
                            </div>
                        </div>
                </div>)
            })}
        </div>
    </div>
  )
}

export default NextDays