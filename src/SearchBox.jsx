import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [err, setErr] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "4a3277c237bfde6626612ff03a0b28b3";

    let getWheatherInfo = async () => {
        try {
            let responce = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponce = await responce.json();
            let result = {
                city: city,
                temp: jsonResponce.main.temp,
                tempMin: jsonResponce.main.temp_max,
                tempMax: jsonResponce.main.temp_min,
                humidity: jsonResponce.main.humidity,
                feelsLike: jsonResponce.main.feels_like,
                weather: jsonResponce.weather[0].description,
            }
            console.log(result);
            return result;
        } catch (err){
            throw err;
        }
    };


    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        try{
            evt.preventDefault();
        console.log(city);
        setCity("")
        let newInfo = await getWheatherInfo();
        updateInfo(newInfo);
    }catch{
        setErr(true);
    }
    };

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit} >
                <TextField id="city" label="City Name" color="" variant="outlined" onChange={handleChange} value={city} required />
                <br />
                <br />
                <Button type="submit" variant="contained">Search</Button>
                {err && <p>No such Place In this world exist!</p>}
            </form>
        </div>

    );
};