import React from 'react'
import { StyledCircleIcon } from "../../styled/StyledIcon";
import {Box} from "@mui/material"
import { ColorModeContext } from "../../contexts/ColorModeContext";
import { useContext } from "react";


import { SxProps, Theme} from "@mui/material";
import { theme } from '../../theme/palette';

const DateStyles = (theme: Theme): SxProps<Theme> => {
  const defaultStyles: SxProps<Theme> = {};
  switch (theme.palette.mode) {
    case "dark":
      return {
        ...defaultStyles,
        color: "#626262",

      };

    case "light": {
      return {
        ...defaultStyles,
        color: "#626262",
      };
    }
  }
};
interface CustomDate{
    date:string,
}

export default function PostDate(props:CustomDate) {
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const date=new Date(props.date);
  const postDate=`${month[date.getMonth()]}   ${date.getDate()} , ${date.getFullYear()}`
  return (
    <>
    <Box sx={DateStyles(theme)}>
    <StyledCircleIcon ></StyledCircleIcon>
      {postDate}</Box>
      </>
  )
}
