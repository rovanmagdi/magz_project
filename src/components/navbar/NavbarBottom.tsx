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
import React, { useCallback, useEffect, useState } from "react";
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
import { InterstedCatergory } from "../../redux/actions/interestedAction";
import { subCatergory } from "../../redux/actions/subCategory";
import { useParams } from "react-router";
import { log } from "console";
export default function NavbarBottom() {
  const intersted = useSelector((state: any) => state.interseted);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [color, setColor] = useState("white");

  const toggleColor = () => {
    return setColor((old) => (old == "white" ? "red" : "white"));
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const nagivate: any = useNavigate();
  const dispatch: any = useDispatch();
  const subCatergoryState = useSelector((state: any) => state.Subcategory);

  const { page } = useParams();
  const userInfoObj = JSON.parse(`${localStorage.getItem("SubCategory")}`);

  const handleGoPage = useCallback(
    (page: any) => {
      console.log("done");
      nagivate(`/${page}`);

      console.log(userInfoObj);
    },
    [page]
  );
  const handleGoHome = () => {
    nagivate("/");
  };

  useEffect(() => {
    // dispatch(subCatergory(page));
    dispatch(InterstedCatergory());
  }, []);

  return (
    <>
      <StyledNavBottom>
        <StyledListNavLeft>
          <StyledListNavLeftContent onClick={handleGoHome}>
            News
          </StyledListNavLeftContent>
          {intersted?.map((page: any, index: any) => {
            return (
              // <StyledListNavLeftContent  />

              <FormControl key={page._id}>
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
                      color: "white",
                    },
                    "&:active": {
                      backgroundColor: `${color}`,
                    },
                  }}
                >
                  <Box onClick={() => handleGoPage(page.title)}>
                    {page.title}
                  </Box>

                  {` `}
                </StyledListNavLeftContent>

                {/* {subCatergoryState[0]?.title} */}

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
                  {subCatergoryState?.map((subCatergory: any) => {
                    return (
                      <MenuItem
                        key={subCatergory._id}
                        sx={{
                          color: "white",
                          "&:hover": {
                            backgroundColor: "rgba(77,126,150,0.4)",
                          },
                        }}
                      >
                        {subCatergory.title}
                      </MenuItem>
                    );
                  })}
                </Menu>
              </FormControl>
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
