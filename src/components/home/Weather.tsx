import React from "react";
import axios from "axios";
import { Box } from "@mui/material";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import { StyledWbSunnyIcon } from "../../styled/StyledIcon";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { StyledCloudIcon } from "../../styled/StyledIcon";
import { WeatherPaper } from "../../styled/styledPaper";
import { useMemo } from "react";

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Weather = () => {
  const [forecast, setForecast] = useState({
    address: "",
    temp: "",
    timezone: "",
    condition: "",
    datetime: "",
    days: [],
  });

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
          days: response.data.days,
        }));

        console.log(response.data);
        console.log(response.data.days);
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
            <Box marginTop={0.5}>
              {" "}
              <Typography variant={"h6"}>
                {useMemo(() => {
                  return `${weekday[new Date(forecast.datetime).getDay()]}`;
                }, [forecast.datetime])}
              </Typography>
            </Box>
          </Stack>

          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            marginTop={5}
          >
            <StyledWbSunnyIcon></StyledWbSunnyIcon>

            <Stack alignItems={"end"}>
              <Box>
                <Typography variant="h3">
                  {useMemo(() => {
                    return `${Math.floor((+forecast.temp - 32) / 1.8)}`;
                  }, [forecast.temp])}
                  °C
                </Typography>
              </Box>

              <Box>
                <Typography variant="h6" textAlign={"center"}>
                  {forecast.condition}
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Stack>

        <Stack direction={"row"} justifyContent={"space-between"} marginTop={3}>
          {forecast ? (
            forecast.days.slice(1, 6).map((forecast: any, index) => {
              return (
                <Stack alignItems={"center"} key={index} spacing={1}>
                  <Box sx={{ position: "relative" }}>
                    <StyledCloudIcon
                      sx={{
                        color: "#C6DEFF",
                      }}
                    ></StyledCloudIcon>
                    <WbSunnyIcon sx={{ color: "#FFA500" }}></WbSunnyIcon>
                  </Box>
                  <Typography fontSize={".7em"}>{`${
                    weekday[new Date(forecast.datetime).getDay()]
                  }`}</Typography>
                  <Typography>
                    {`${Math.floor((+forecast.temp - 33) / 1.8)}`}°C{" "}
                  </Typography>
                </Stack>
              );
            })
          ) : (
            <div>loading</div>
          )}
        </Stack>
      </WeatherPaper>
    </>
  );
};

export default Weather;
