import React from 'react'
import InputComponent from './InputComponent'

const HeaderComponent: React.FC<any> = () => {
  return (
    <header className='bg-main-blue p-7 flex justify-around'>
        <h1 className="font-extrabold">The Weather App</h1>
        <InputComponent />

    </header>
  )
}

export default HeaderComponent