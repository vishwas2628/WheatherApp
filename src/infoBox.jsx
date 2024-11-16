import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import "./infobox.css";

export default function InfoBox({ info }) {
  const FOG_URL = "https://bsmedia.business-standard.com/_media/bs/img/article/2024-11/13/full/1731471589-9337.jpg?im=FeatureCrop,size=(826,465)";
  const COLD_URL = "https://thumbs.dreamstime.com/b/beauty-winter-happy-girl-blowing-snow-frosty-winter-park-outdoors-girl-winter-cold-weather-83234180.jpg";
  const HOT_URL = "https://media.licdn.com/dms/image/v2/D5612AQFn1C4ig_LWUQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1696950958211?e=1736985600&v=beta&t=u-UNu47978mi3KaObJwucgcikZH88pb_xvMBSympc0E";
  const RAIN_URL = "https://t4.ftcdn.net/jpg/03/66/90/39/240_F_366903907_RzCXMYTOdWnfEmm8wZ3fKnfEOLE2Qhmh.jpg";

  return (
    <div className="InfoBox">
      <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
            title="green iguana"
          />
          <CardContent>
            <div>
              <Typography gutterBottom variant="h5" component="div">
                {info.city} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ?<WbSunnyIcon/>:<AcUnitIcon/>}
              </Typography>
            </div>
            <div>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                <span>Temprature = {info.temp}&deg;C</span> <br />
                <span>Humidity = {info.humidity}</span> <br />
                <span>Weather = {info.weather}</span> <br />
                <span>Temp Max= {info.tempMax}&deg;C</span> <br />
                <span>Temp Min = {info.tempMin}&deg;C</span> <br />
                <span>The Weather Feels Like = {info.feelsLike}</span>
              </Typography>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )


}