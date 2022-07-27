import React from 'react'
import InputComponent from './InputComponent'

const HeaderComponent: React.FC<any> = ({handleForecast}) => {
  return (
    <header className='bg-main-blue p-7 grid grid-flow-col grid-cols-2 justify-around'>
        <h1 className="font-extrabold">The Weather App</h1>
        <div className='flex justify-center'>
        <InputComponent handleForecast={handleForecast}/>  
        </div>

    </header>
  )
}

export default HeaderComponent