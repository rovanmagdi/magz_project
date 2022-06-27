import React from 'react'
import ProfileInfo from "../../components/profileInfo/ProfileInfo";
import ProfileForm from "../../components/profileFrom/ProfileForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getProfileEditFlag,

} from "../../redux/actions/flagsAction";
import { Box } from "@mui/system";


export default function ProfileContent() {
    const dispatch: any = useDispatch();

    let editMode = useSelector((state: any) => state.flags.profileEditFlag);
    const user = useSelector((state: any) => state.user);
   
  
    useEffect(() => {
      dispatch(getProfileEditFlag());
      console.log('hello from content')
    }, [dispatch, editMode,user]);
  
    return <>
    <Box sx={{marginTop:'20px'}}>
    {editMode ? <ProfileForm /> : <ProfileInfo />}
    </Box>
    </>;
}
