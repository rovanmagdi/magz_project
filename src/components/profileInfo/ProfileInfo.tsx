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
import { ProfileDataItem } from "../../styled/styledPaper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setTrueProfileEditFlag } from "../../redux/actions/flagsAction";
import { UserInfo } from "../../types/profile";

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
