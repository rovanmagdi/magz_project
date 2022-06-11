import React from "react";
import ProfileContent from "../../components/profileContent/ProfileContent";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/system";
import { Typography, Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Person from "../../assets/person.png";
import cameraIcon from "../../assets/cameraIcon.png";
import Badge from "@mui/material/Badge";
import {UserInfo} from '../../types/profile'


export default function ProfilePge() {
  const userInfoObj: UserInfo = JSON.parse(
    `${localStorage.getItem("RegisterInfo")}`
  );

  const userName = `${userInfoObj.firstName} ${userInfoObj.lastName} `;

  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  }));

  const editProfilePic = () => {
    console.log("clicked");
  };
  return (
    <>
      <Box
        sx={{
          width: {lg:"70%",md:'80%',xs:'90%'},
          margin: "auto",
          textAlign: "center",
          padding: "20px 0px",
        }}
      >
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={
            <SmallAvatar
              alt="Remy Sharp"
              src={cameraIcon}
              onClick={editProfilePic}
            />
          }
        >
          <Avatar
            sx={{ width: "150px", height: "150px", margin: "auto" }}
            src={Person}
          ></Avatar>
        </Badge>

        <Typography variant="h3" mt={1}>{userName}</Typography>

        <ProfileContent />
      </Box>
    </>
  );
}
