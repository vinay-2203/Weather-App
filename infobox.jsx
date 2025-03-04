import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { borderRadius, style } from '@mui/system';
import { imageListClasses } from '@mui/material';
export default function Infobox({ info }) {

    // const getimage = (weather) => {
    //     if(weather.toLowerCase().includes("clear sky")){
    //         return "/Users/vinaykumar/Desktop/Weather web app/Weather/images/sunny.jpg"
    //     }
    //     else if(weather.toLowerCase().includes("rain")){
    //         return "/Users/vinaykumar/Desktop/Weather web app/Weather/images/rainy.jpg"
    //     }
    //     else if(weather.toLowerCase().includes("haze")){
    //         return "/Users/vinaykumar/Desktop/Weather web app/Weather/images/summer.jpg"
    //     }
    //     else{
    //         return "/Users/vinaykumar/Desktop/Weather web app/Weather/images/foggy.jpg"
    //     }
    // }

    return (
        <div>
            <h1>Weather Information!</h1>
            <Card sx={{ maxWidth: 345 }} style={{ margin: 'auto', borderRadius: '10px', backgroundColor: 'Lightblue'}}>
                <CardMedia
                    component="img"
                    alt="Climate Image"
                    height="200"
                    // image="/static/images/cards/contemplative-reptile.jpg"
                    image = "https://images.unsplash.com/photo-1579003593419-98f949b9398f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Temperature : {info.temp}&deg;C
                        <br />
                        <br />
                        Temperature MIN : {info.temp_min}&deg;C
                        <br />
                        <br />
                        Temperature MAX : {info.temp_max}&deg;C
                        <br />
                        <br />
                        Humidity :  {info.humidity}%
                        <br />
                        <br />
                        Weather : {info.weather}
                        <br />
                        <br />
                        Feels-Like : {info.feelsLike}&deg;C
                    </Typography>
                </CardContent>
                <CardActions>
                    {/* <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button> */}
                </CardActions>
            </Card>

        </div>
    )
}