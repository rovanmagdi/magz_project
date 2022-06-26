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
import { subCatergory } from "../../redux/actions/subCategory";
import { useParams } from "react-router";
export default function NavbarBottom() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [subcategories, setSubcategories] = useState([]);
  const subCatergoryState = useSelector((state: any) => state?.Subcategory);
  const nagivate: any = useNavigate();
  const dispatch: any = useDispatch();

  const { page } = useParams();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>,id:any) => {
    setAnchorEl(event.currentTarget);
    handleGoPage(id);
    handleRoute(id);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleGoPage = useCallback(
    (page: any) => {
      const [{ subCategories }] = subCatergoryState?.filter(
        (el: any) => el._id === page
      );

      setSubcategories((old: any) => subCategories);
    },
    [page, setSubcategories, subCatergoryState]
  );
  
  const handleGoHome = () => {
    nagivate("/");
  };

  useEffect(() => {
    dispatch(subCatergory());
  }, [dispatch]);

  const handleRoute=(page:any)=>

  {
    console.log("go");
    nagivate(`/${page}`)

    
  }
  return (
    <>
      <StyledNavBottom>
        <StyledListNavLeft>
          <StyledListNavLeftContent onClick={handleGoHome}>
            News
          </StyledListNavLeftContent>
          {subCatergoryState?.map((page: any, index: any) => {
            return (
              <FormControl key={page._id}>
                <StyledListNavLeftContent
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => handleClick(event,page._id)}
                  sx={{
                    color: "white",
                    fontFamily: "Oswald",
                    "&:hover": {
                      color: "white",
                    },
                  }}
                >
               
                    <Box>{page._id}</Box>
                 

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
                  {subcategories?.map((el: any) => (
                    <Box sx={{ color: "white", width: "100px" }} key={el._id}>
                      {el?.title}
                    </Box>
                  ))}
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

