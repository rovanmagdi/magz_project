import React from 'react'

interface CustomDate{
    date:string,
}

export default function PostDate(props:CustomDate) {
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const date=new Date(props.date);
  const postDate=`${month[date.getMonth()]}   ${date.getDate()} , ${date.getFullYear()}`
  return (
      <div>{postDate}</div>
    
  )
}
