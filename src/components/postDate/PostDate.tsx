import React from 'react'
import { StyledCircleIcon } from "../../styled/StyledIcon";
import {Box} from "@mui/material"
interface CustomDate{
    date:string,
}

export default function PostDate(props:CustomDate) {
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const date=new Date(props.date);
  const postDate=`${month[date.getMonth()]}   ${date.getDate()} , ${date.getFullYear()}`
  return (
    <>
    <Box>
    <StyledCircleIcon ></StyledCircleIcon>
      {postDate}</Box>
      </>
  )
}
