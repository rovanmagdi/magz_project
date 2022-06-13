import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { Box, styled } from "@mui/system";
import { StyledButton } from "../../styled/Button";
import { ProfileDataItem } from "../../styled/styledPaper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getProfileEditFlag,
  setTrueProfileEditFlag,
  setFalseProfileEditFlag,
} from "../../redux/actions/flagsAction";
import { UserInfo } from "../../types/profile";

export default function ProfileInfo() {
  const userInfoObj: UserInfo = JSON.parse(
    `${localStorage.getItem("RegisterInfo")}`
  );

  const email = `${userInfoObj.email}`;
  const dispatch: any = useDispatch();

  const elevation: number = 5;

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
          </TableBody>
        </Table>
        <StyledButton onClick={handleEditClick}>
          <Typography color={"white"}>Edit profile</Typography>
        </StyledButton>
      </Box>
    </>
  );
}
