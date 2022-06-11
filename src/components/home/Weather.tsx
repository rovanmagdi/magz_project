import React from "react";
import axios from "axios";
import { Box } from "@mui/material";
import { useState } from "react";
import { Today } from "@mui/icons-material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { color } from "@mui/system";
import { StyledCultureCard } from "../../styled/styledCard";
import { OverlayCultureBox } from "../../styled/styledBox";
import Forecast from "../../types/forecast";
import { useSelector } from "react-redux";
import { Stack } from "@mui/material";
import { StyledWbSunnyIcon } from "../../styled/StyledIcon";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import NightlightIcon from "@mui/icons-material/Nightlight";
import { keyframes } from "@emotion/react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { StyledCloudIcon } from "../../styled/StyledIcon";
import { WeatherPaper } from "../../styled/StyledPaper";
const spin = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const Weather = () => {
  const [forecast, setForecast] = useState({
    address: "",
    temp: "",
    timezone: "",
    condition: "",
    icon: "",
    datetime: "",
    sundatetime:"",
    mondatetime:"",
    tuedatetime:"",
    weddatetime:"",
    thudatetime:"",
    sattemp: "",
    suntemp: "",
    montemp: "",
    tuetemp: "",
    wedtemp: "",
  });

  // const {address, description, condition , icon} = forecast;

  React.useEffect(() => {
    axios
      .get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Egypt?key=AXP3EYGT4XN9R75YHKJCM2J29`
      )
      .then((response) => {
        setForecast((forecast) => ({
          ...forecast,
          address: response.data.address,
          temp: response.data.currentConditions.temp,
          timezone: response.data.timezone,
          condition: response.data.currentConditions.conditions,
          datetime: response.data.days[0].datetime,
          
          sundatetime: response.data.days[1].datetime,
          mondatetime: response.data.days[2].datetime,
          tuedatetime: response.data.days[3].datetime,
          weddatetime: response.data.days[4].datetime,
          thudatetime: response.data.days[5].datetime,
          sattemp: response.data.days[1].temp,
          suntemp: response.data.days[2].temp,
          montemp: response.data.days[3].temp,
          tuetemp: response.data.days[4].temp,
          wedtemp: response.data.days[5].temp,
        }));

        console.log(response.data);
      });
  }, []);

  return (
    <>
      <WeatherPaper>
        <Stack>

<Stack direction={"row"} justifyContent={"space-between"}>
          <Box>
            <Typography variant="h6">
              {" "}
              <LocationOnIcon fontSize={"small"}></LocationOnIcon>{" "}
              {forecast.timezone}
            </Typography>
        
            <Typography fontSize={12} marginLeft={3}>
              {" "}
              {forecast.datetime}
            </Typography>
          </Box>
          <Box marginTop={.5}>            <Typography variant={"h6"} >{`${weekday[ new Date(forecast.sundatetime).getDay()]}`}</Typography>
</Box>
          </Stack>

          <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
            <StyledWbSunnyIcon
         
            ></StyledWbSunnyIcon>

            <Stack alignItems={"end"}>

              <Box>
                <Typography variant="h4">
                  {`${Math.floor((+forecast.temp - 32) / 1.8)}`}°C{" "}
                </Typography>
              </Box>

              <Box>
                <Typography variant="h6" textAlign={"center"}>
                  {forecast.condition}
                </Typography>
              </Box>
            </Stack>
          </Stack>

          <Box>
            <Typography>{forecast.icon}</Typography>
          </Box>
        </Stack>

        <Stack direction={"row"} justifyContent={"space-between"} marginTop={3}>
          <Box sx={{ position: "relative" }}>
            <StyledCloudIcon
              sx={{
                color: "#C6DEFF",
              }}
            ></StyledCloudIcon>
            <WbSunnyIcon sx={{ color: "#FFA500" }}></WbSunnyIcon>
          </Box>

          <Box sx={{ position: "relative" }}>
            <StyledCloudIcon
              sx={{
                color: "#91C0F8",
              }}
            ></StyledCloudIcon>
            <WbSunnyIcon sx={{ color: "#FFA500" }}></WbSunnyIcon>
          </Box>
          <Box sx={{ position: "relative" }}>
            <StyledCloudIcon
              sx={{
                color: "#56A0EE",
              }}
            ></StyledCloudIcon>
            <WbSunnyIcon sx={{ color: "#FFA500" }}></WbSunnyIcon>
          </Box>

          <Box sx={{ position: "relative" }}>
            <NightlightIcon sx={{ color: "#FFA500" }}></NightlightIcon>
            <StyledCloudIcon
              sx={{
                color: "#C6DEFF",
              }}
            ></StyledCloudIcon>
          </Box>
          <Box sx={{ position: "relative" }}>
            <NightlightIcon sx={{ color: "#FFA500" }}></NightlightIcon>
            <StyledCloudIcon
              sx={{
                color: "#91C0F8",
              }}
            ></StyledCloudIcon>
          </Box>
        </Stack>
        <Stack direction={"row"} justifyContent={"space-between"}>
{}
          <Typography fontSize={".6em"}>{`${weekday[ new Date(forecast.sundatetime).getDay()]}`}</Typography>
          <Typography fontSize={".6em"}>{`${weekday[ new Date(forecast.mondatetime).getDay()]}`}</Typography>
          <Typography fontSize={".6em"}>{`${weekday[ new Date(forecast.tuedatetime).getDay()]}`}</Typography>
          <Typography fontSize={".6em"}>{`${weekday[ new Date(forecast.weddatetime).getDay()]}`}</Typography>
          <Typography fontSize={".6em"}>{`${weekday[ new Date(forecast.thudatetime).getDay()]}`}</Typography>


        </Stack>

        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography>
            {`${Math.floor((+forecast.sattemp - 33) / 1.8)}`}°C{" "}
          </Typography>
          <Typography>
            {`${Math.floor((+forecast.suntemp - 33) / 1.8)}`}°C{" "}
          </Typography>
          <Typography>
            {`${Math.floor((+forecast.montemp - 33) / 1.8)}`}°C{" "}
          </Typography>
          <Typography>
            {`${Math.floor((+forecast.tuetemp - 33) / 1.8)}`}°C{" "}
          </Typography>
          <Typography>
            {`${Math.floor((+forecast.wedtemp - 33) / 1.8)}`}°C{" "}
          </Typography>
        </Stack>
      </WeatherPaper>
    </>
  );
};

export default Weather;
