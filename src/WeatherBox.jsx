import { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './infoBox';
import "./weatherBox.css";


export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
            city: "City",
            feelsLike: 24.84,
            temp: 25.05,
            tempMin: 25.05,
            tempMax: 25.05,
            humidity: 47,
            weather: "Wonder",
          
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return(
        <div className='weatherBox'>
        <h1 className='heading'>Weather App by Vishwas</h1>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info = {weatherInfo}/>
        </div>
        )
}