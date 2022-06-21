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
import { UserInfo } from "../../types/profile";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/actions/userActions";
import Interested from '../Interested/Interested'

export default function ProfilePge() {
  const [userInf, setUserInf]: any = useState();
  const user = useSelector((state: any) => state.user);
  const Input = styled("input")({
    display: "none",
  });

  useEffect(() => {}, [user]);

  const dispatch: any = useDispatch();
  const userInfoObj: UserInfo = JSON.parse(
    `${localStorage.getItem("RegisterInfo")}`
  );

  const userName = `${userInfoObj.firstName} ${userInfoObj.lastName} `;
  // const userName =`omnia mahmoud`
  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  }));

  const editProfilePic = () => {
    console.log("clicked");
  };
  const uploadImage = (files: any) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "tl55trty");
    console.log(userInfoObj.token);

    axios
      .post("https://api.cloudinary.com/v1_1/dsvj1cj17/image/upload", formData)
      .then((res) => {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfoObj.token}`,
          },
        };

        // console.log(res.data.secure_url);
       
        dispatch(updateUser( {...user,image: res.data.secure_url}));

      })
      .catch((err) => {
        alert("some thing go wrong data base" + err);
      });
  };
  return (
    <>
      <Box
        sx={{
          width: { lg: "70%", md: "80%", xs: "90%" },
          margin: "auto",
          textAlign: "center",
          padding: "20px 0px",
        }}
      >
        {/* <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent=
          {
            <SmallAvatar
              alt="Remy Sharp"
              src={cameraIcon}
              onClick={editProfilePic}
            />
           

            
          }
        > */}
        <Avatar
          sx={{ width: "150px", height: "150px", margin: "auto" }}
          src={userInfoObj.image}
        ></Avatar>
        {/* </Badge> */}
        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            name="file"
            onChange={(event) => uploadImage(event.target.files)}
          />
          <CameraAltIcon
            sx={{
              // position: "absolute",
              // left: "45%",
              color: "black",
              marginTop: "5px",
              cursor: "pointer",
            }}
          />
        </label>
        <Typography variant="h3" mt={1}>
          {userName}
        </Typography>

        <ProfileContent />
      </Box>
    </>
  );
}
