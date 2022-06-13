import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { StyledButton } from "../../styled/Button";
import TextField from "@mui/material/TextField";
import { useDispatch  } from "react-redux";
import {setFalseProfileEditFlag} from '../../redux/actions/flagsAction'
import {UserInfo} from '../../types/profile'
import axios from 'axios';
import { json } from "stream/consumers";


export default function ProfileForm() {

  const userInfoObj: UserInfo = JSON.parse(
    `${localStorage.getItem("RegisterInfo")}`
  );
 
 const firstName=`${userInfoObj.firstName}`;;
 const lastName= `${userInfoObj.lastName}`;
  const email = `${userInfoObj.email}`;
  //  `${userInfoObj.email}`;
 const userToken= `${userInfoObj.token}`;

  const dispatch:any=useDispatch();

  const config={
    headers:{
     'Content-Type':'application/json',
     Authorization:`Bearer ${userToken}`
    }
  }

  const handleSaveClick=()=>{
    const userInfoObj=JSON.parse(localStorage.RegisterInfo);

    const userInfo={
      firstName:`${userInfoObj.firstName}`,
      lastName:`${userInfoObj.lastName}`,
    
  }
      //api call with patch => switch to redux
      axios.patch(`${process.env.REACT_APP_BACKED}/user`,userInfo,config)
      .then(res => {
        const updatedUser=res.data;
        console.log(updatedUser)
        // localStorage.setItem('RegisterInfo','hi')
      }).catch((err)=>{
        console.log(err)
      })
    dispatch(setFalseProfileEditFlag());
    
}

const handleCancelClick=()=>{
    dispatch(setFalseProfileEditFlag());
   
    
}
 
 

  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>
                <TextField
                  id="outlined-helperText"
                  label="Required *"
                  defaultValue={firstName}
                  helperText="Some important text"
                  fullWidth
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Last Name</TableCell>
              <TableCell>
                <TextField
                  id="outlined-helperText"
                  label="Required *"
                  defaultValue={lastName}
                  helperText="Some important text"
                  fullWidth
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>E-mail</TableCell>
              <TableCell>
                <TextField
                  id="outlined-helperText"
                  label="Required *"
                  defaultValue={email}
                  helperText="Some important text"
                  fullWidth
                />
              </TableCell>
            </TableRow>

            
          </TableBody>
        </Table>
        <StyledButton onClick={handleSaveClick}>
          <Typography color={"white"}>Save</Typography>
        </StyledButton>
        <StyledButton sx={{ marginLeft: "20px" }} onClick={handleCancelClick}>
          <Typography color={"white"}>Cancel</Typography>
        </StyledButton>
      </Box>
    </>
  );
}
