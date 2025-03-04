import {useState} from 'react'
import './App.css'
import WeatherApp from './weatherApp'
import Infobox from '../infobox'
function App() {
  const [weatherinfo,setweatherinfo] = useState({
    city: "City",
    feelsLike: "null",
    temp: "null",
    temp_min: "null",
    temp_max: "null",
    humidity: "null",
    weather: "null",
  })
  
  let updateinfo = (info) => {
    setweatherinfo(info);
  }

  return (
    <div>
      <h1>Weather App For Current Updates!</h1>
      <WeatherApp updateinfo={updateinfo}></WeatherApp>
      <Infobox info = {weatherinfo}></Infobox>
    </div>
  )
}

export default App
