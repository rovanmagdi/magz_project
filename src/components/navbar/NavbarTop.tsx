import {
  Box,
  Button,
  FormControl,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  PersonIconNav,
  StyledLink,
  StyledNavTop,
  StyledNavTopRight,
  StyledRightOne,
  StyledRightOneConatiner,
  StylesSelected,
} from "../../styled/Navbar";

import { userLogout } from "../../redux/actions/userData";
import { useSelector } from "react-redux";
import { ColorModeContext } from "../../contexts/ColorModeContext";
import { useContext } from "react";
import { useTheme } from "@mui/material";

import { SxProps, Theme } from "@mui/material";
import { theme } from "../../theme/palette";

const TopNavStyles = (theme: Theme): SxProps<Theme> => {
  const defaultStyles: SxProps<Theme> = {};
  switch (theme.palette.mode) {
    case "dark":
      return {
        ...defaultStyles,
        color: "black",
        backgroundColor: "#E6E8F0",

      };

    case "light": {
      return {
        ...defaultStyles,
        color: "black",
        backgroundColor: "#E6E8F0",
      };
    }
  }
};

export default function NavbarTop() {
  const user = useSelector((state: any) => state.user);
  useEffect(() => { }, [user]);
  let newDate = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let date_raw = days[newDate.getDay()];
  let month_raw = months[newDate.getMonth() + 1];
  let year = newDate.getFullYear();
  function handleChange(event: any) {
    setSelected(event.target.value);
  }

  const [values, setValues] = React.useState(["Egypt", "UK Edition"]);
  const [selected, setSelected] = useState("Egypt");
  const nagivate: any = useNavigate();

  const handleClickLogin = () => {
    nagivate("/login");
  };
  const [isOpened, setIsOpened] = useState(false);

  function toggle() {
    setIsOpened((wasOpened) => !wasOpened);
  }
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleProfile = () => {
    nagivate("/Profile");
  };
  const dispatch: any = useDispatch();
  const handleClickLogout = () => {
    console.log("logout");
    dispatch(userLogout());
    nagivate("/");
  };
  const RegisterInfo = localStorage.getItem("RegisterInfo");
  const userInfoObj = JSON.parse(`${localStorage.getItem("RegisterInfo")}`);
  return (
    <>
      <StyledNavTop sx={TopNavStyles(theme)}>
        <Box component="div" sx={{ color: "#AAAEAF" }}>
          {date_raw} {month_raw} { },{year}
        </Box>
        <StyledNavTopRight>
          {!RegisterInfo ? (
            <StyledRightOne
              onClick={() => {
                handleClickLogin();
              }}
            >
              <StyledRightOneConatiner>
                <PersonIconNav />
              </StyledRightOneConatiner>
              <Typography
                sx={{ margin: "10px", fontSize: "12px" }}
                component={"span"}
                variant={"body2"}
              >
                <StyledLink sx={TopNavStyles(theme)}>Sign in</StyledLink>
              </Typography>
            </StyledRightOne>
          ) : (
            <Box>
              <StyledRightOne>
                <FormControl >
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    {!userInfoObj.imageUrl ? (
                      <Box sx={TopNavStyles(theme)} display="flex">
                        {userInfoObj.image !== "" ? (
                          <Box
                            component="img"
                            sx={{
                              height: "25px",
                              width: "25px",
                              borderRadius: "50%",
                              marginRight: "10px",

                            }}
                            src={`${userInfoObj.image}`}
                          />
                        ) : (
                          <StyledRightOneConatiner>
                            <PersonIconNav />

                          </StyledRightOneConatiner>
                        )}
                        <Box sx={{ textTransform: "capitalize", fontWeight: "bold" }}>{userInfoObj.firstName} {userInfoObj.lastName}</Box>
                      </Box>
                    ) : (
                      <>
                        <Box
                          component="img"
                          sx={{
                            height: "25px",
                            width: "25px",
                            borderRadius: "50%",
                            marginRight: "10px",
                          }}
                          src={`${userInfoObj.imageUrl}`}
                        />
                        <Box>{userInfoObj.name} </Box>
                      </>
                    )}
                    {` `}
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      style: {
                        width: 130,
                        textAlign: "center",
                      },
                    }}
                  >
                    <MenuItem
                      onClick={handleProfile}
                      sx={{
                        "&:hover": {
                          backgroundColor: "rgba(77,126,150,0.4)",
                        },
                      }}
                    >
                      Profile{" "}
                    </MenuItem>
                    <MenuItem
                      onClick={handleClickLogout}
                      sx={{
                        "&:hover": {
                          backgroundColor: "rgba(77,126,150,0.4)",
                        },
                      }}
                    >
                      Logout
                    </MenuItem>
                  </Menu>
                </FormControl>
              </StyledRightOne>
            </Box>
          )}

          <Box>
            <FormControl >
              <StylesSelected sx={TopNavStyles(theme)}
                value={selected}
                onChange={handleChange}
                inputProps={{
                  name: "agent",
                  id: "age-simple",
                }}
              >
                {values.map((value, index) => {
                  return (
                    <MenuItem key={index} value={value}>
                      {value}
                    </MenuItem>
                  );
                })}
              </StylesSelected>
            </FormControl>
          </Box>
        </StyledNavTopRight>
      </StyledNavTop>
    </>
  );
}
