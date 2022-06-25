import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Box, Checkbox, Grid, Stack
} from "@mui/material";
import { StyledButton } from "../../styled/Button";
import { ProfileDataItem } from "../../styled/styledPaper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setTrueProfileEditFlag } from "../../redux/actions/flagsAction";
import { UserInfo } from "../../types/profile";
import { StyledLine } from "../../styled/Footer";
import { StyledDescription, StyledTitle } from "../../styled/CategoryIntersted";
import { useState } from "react";


export default function ProfileInfo() {
  let userInfoObj: UserInfo = {
    firstName: "",
    lastName: "",
    token: "",
    email: "",
    image: "",
  };

  const user = useSelector((state: any) => state.user);
  useEffect(() => {}, [user]);

  userInfoObj = JSON.parse(`${localStorage.getItem("RegisterInfo")}`);
  const email = `${userInfoObj.email}`;
  const intersted:string[] = userInfoObj.intersted!;

  const dispatch: any = useDispatch();

  const elevation: number = 5;

  const allInterests = useSelector((state: any) => state.interseted);
  const userInterested:string[]=allInterests?.filter(((el:any)=> intersted?.includes(el.title
    )))
  // console.log(allInterests,intersted,userInterested)



  const handleEditClick = () => {
    
    dispatch(setTrueProfileEditFlag());
  };



  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>E-mail</TableCell>
              <TableCell>
                <ProfileDataItem elevation={elevation}>{email}</ProfileDataItem>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Interested</TableCell>
              <TableCell>
              {userInterested?.map((item: any) => {
            return (
              <Stack key={item._id}>
                <Box
                  sx={{
                    paddingTop: "25px",
                    display: "flex",
                    margin: "auto",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    height="150px"
                    width="190px"
                  />

                  <Box>
                    <StyledTitle>{item.title}</StyledTitle>
                    <StyledDescription>{item.description}</StyledDescription>
                    <Checkbox
                      // {...label}
                      name="intersets"
                      value={item.title}
                     
                      checked
                    />
                    Yes,
                  </Box>
                </Box>
                <StyledLine sx={{ width: "650px" }} />
              </Stack>
            );
          })}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <StyledButton onClick={handleEditClick}>
          <Typography color={"white"}>Edit profile</Typography>
        </StyledButton>
      </Box>
    </>
  );
}
