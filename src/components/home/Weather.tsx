import React from 'react';
import axios from 'axios';
import { Box } from '@mui/material';
import { useState } from 'react';
const Weather = () => {



    const [weather, setWeather] = useState([])
   React.useEffect(()=>{
        axios.get("http://api.weatherstack.com/current?access_key=61e989b2d1f88acfd625122894059559&query=New%20York").then((response)=> setWeather(response.data));
         
                    
                          },[]);   
    return (
        <div>
 
        

    
        </div>
    );
};

export default Weather;