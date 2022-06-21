import {
  Box,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  Menu,
  MenuItem,
  OutlinedInput,
} from "@mui/material";
import React, { useEffect } from "react";
import {
  MaterialUISwitch,
  StyledListNavLeft,
  StyledListNavLeftContent,
  StyledListNavRight,
  StyledNavBottom,
} from "../../styled/Navbar";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogout } from "../../redux/actions/userData";
import {InterstedCatergory} from '../../redux/actions/interestedAction'
export default function NavbarBottom() {

  const intersted = useSelector((state: any) => state.interseted);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const nagivate: any = useNavigate();
  const handleProfile = () => {
    nagivate("/Profile");
  };
  const dispatch: any = useDispatch();

  const handleClickLogout = () => {
    console.log("logout");
    dispatch(userLogout());
    nagivate("/");
  };
  useEffect(()=>
  {
    dispatch(InterstedCatergory())
  })
  return (
    <>
      <StyledNavBottom>
        <StyledListNavLeft>
          <StyledListNavLeftContent>News</StyledListNavLeftContent>
          {intersted?.map((page: any, index: any) => {
            return (
              // <StyledListNavLeftContent  />
              <>
                <FormControl>
                  <StyledListNavLeftContent
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    sx={{
                      color: "white",
                      fontFamily: "Oswald",
                      "&:hover": {
                        backgroundColor: "#4D7E96",
                        color: "white",
                      },
                    }}
                  >
                    <Box>{page.title}</Box>

                    {` `}
                  </StyledListNavLeftContent>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      style: {
                        textAlign: "center",
                        backgroundColor: "#272727",
                        color: "#FFFFF",
                        borderRadius: "0px",
                      },
                    }}
                  >
                    <MenuItem
                      onClick={handleProfile}
                      sx={{
                        color: "white",
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
                        color: "white",
                        "&:hover": {
                          backgroundColor: "rgba(77,126,150,0.4)",
                        },
                      }}
                    >
                      Logout
                    </MenuItem>
                  </Menu>
                </FormControl>
              </>
            );
          })}
        </StyledListNavLeft>
        <StyledListNavRight>
          <FormControl sx={{ m: 5, width: "25ch" }} variant="outlined">
            <OutlinedInput
              sx={{ height: "30px", borderRadius: "40px", color: "white" }}
              id="outlined-adornment-weight"
              endAdornment={
                <InputAdornment position="end">
                  <SearchIcon sx={{ color: "white" }} />
                </InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
          </FormControl>
          <FormGroup>
            <FormControlLabel
              control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
              label=""
            />
          </FormGroup>
        </StyledListNavRight>
      </StyledNavBottom>
    </>
  );
}
function setIsOpened(arg0: (wasOpened: any) => boolean) {
  throw new Error("Function not implemented.");
}
