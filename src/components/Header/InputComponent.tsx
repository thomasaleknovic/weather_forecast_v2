import React from 'react'
import { useState } from 'react';
import Search from './Search.svg'
import { GET_FORECAST } from '../../api/weatherApi';
import useFetch from '../../hooks/useFetch';


const InputComponent: React.FC<any> = ({handleForecast}) => {

  const [location, setLocation] = useState<any>(null)
  

  function handleChange ( event: any) {
    event?.preventDefault();
    setLocation(event.target.value)
  }

  async function handleSubmit (event: any) {
    event.preventDefault()
    handleForecast(location)
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-row items-center justify-center'>
    <input onChange={handleChange} className="p-3 bg-[#333333] rounded-l-md h-12 focus-visible:outline-none" type="text"  name="location" placeholder='Localização'></input>
    <button className='bg-[#333333] h-12 px-2 rounded-r-md'><img src='/Search.svg' alt='search' width={20} /></button>
    </form>

  )
}

export default InputComponent