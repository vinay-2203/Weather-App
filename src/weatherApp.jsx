import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function WeatherApp({updateinfo}) {
    let [city, setcity] = useState("");
    const API = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "d1a8eb623d358560673c76365a93229a";
    let handlechange = (e) => {
        setcity(e.target.value);
    }

    let get_Weather_info = async () => {
        let response = await fetch(`${API}?q=${city}&appid=${API_KEY}&units=metric`);
        let json_response = await response.json();
        console.log(json_response);
        let result  = {
            city : city,
            temp :json_response.main.temp,
            temp_min : json_response.main.temp_min,
            temp_max : json_response.main.temp_max,
            humidity : json_response.main.humidity,
            feelsLike : json_response.main.feels_like,
            weather : json_response.weather[0].description,

        };
        console.log(result);
        return result;

    }

    let handlesubmit = async(e) => {
        e.preventDefault();
        // console.log(city);
        setcity("");
        let info = await get_Weather_info()
        updateinfo(info);
    }
    return (
        <div>
            <form onSubmit={handlesubmit}>
                <TextField id="outlined-basic" label="City Name" variant="outlined"  onChange={handlechange} required value={city}/>
                <br />
                <br />
                <Button variant="text" size='large' type='submit' >Search</Button>
            </form>

        </div>
    )
}