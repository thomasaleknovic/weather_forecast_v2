import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import useFetch from '../src/hooks/useFetch';
import { useEffect, useState } from 'react';
import { GET_FORECAST, GET_LOCATION } from '../src/api/weatherApi';
import WeatherInterface from '../src/components/WeatherInterface';
import HeaderComponent from '../src/components/Header/HeaderComponent';

const Home: NextPage = () => {

  const [data, setData] = useState<any>(null)
  const {request, error, loading} = useFetch()
  const [updateForecast, setUpdateForecast] = useState<any>()

  async function handleForecast (location:any) {
      const {URL} = GET_FORECAST(location)
      const forecast = await request(URL)
      setData(forecast.response!.data)
  }


  useEffect (() => {
    const loadAll = async () => {
    const {URL} = GET_LOCATION()
    const {response} = await request(URL)
    if(response){
      let location = response.data.city
      const {URL} = GET_FORECAST(location)
      const forecast = await request(URL)
      setData(forecast.response!.data)
    }
    }
    loadAll()
    
  }, [])

  
  return (
    <div className='bg-[#333333] w-screen h-[100em] text-white'>
      <Head>
        <title>Weather Forecast App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderComponent handleForecast={handleForecast}/>
      {data &&
          <div>
            <WeatherInterface data={data} />
          </div>
        }
    </div>
  )
}

export default Home
