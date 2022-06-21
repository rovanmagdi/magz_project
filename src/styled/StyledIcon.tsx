import { styled } from "@mui/material";

import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import NightlightIcon from '@mui/icons-material/Nightlight';
import { keyframes } from "@emotion/react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CircleIcon from '@mui/icons-material/Circle';



const spin = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;


export const StyledWbSunnyIcon= styled(WbSunnyIcon)(()=>({


    color: "#FFA500",
    fontSize: "4em",
    animation: `${spin} 5s infinite ease-in-out`,
    marginLeft: "25px",


}))



export const StyledCloudIcon= styled(CloudIcon)(()=>({


    position: "absolute",
    left: "3%",
    bottom: "1%",


}))




export const StyledCircleIcon= styled(CircleIcon)(()=>({


  fontSize:".7em",
  marginRight:"5px"


}))







