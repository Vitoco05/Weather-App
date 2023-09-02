import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Weather from './components/Weather'

function App() {

  const [weatherInfo, setWeatherInfo] = useState(null)

  const success = (pos) => {
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude

    const API_KEY = "24629ad39ed62edb5cdfbc72b3416e34"

    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
    .then(({data}) => setWeatherInfo(data))
    .catch(error => console.log(error))
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])
  

  return (
    
    <>
     <main className="bg-[url(/Images/bg2.png)] bg-no-repeat bg-cover min-h-screen text-black font-Lato flex justify-center items-center px-4">
      <Weather weatherInfo={weatherInfo}/>
     </main>

    </>
  )
}

export default App
