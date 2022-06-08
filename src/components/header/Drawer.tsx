import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  Typography,
  IconButton,
  FormControl,
  OutlinedInput,
  InputAdornment
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";


const DrawerList = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const PAGES = ["new", "opinion", "sport", "life style"];

  const StyledMenu = styled(MenuIcon)(({ theme }) => ({
    color: `${theme.palette.primary.light}`,
    marginRight: "10px",
    fontSize:"50px"
  }));
  const StyledListItemText = styled(Box)(({ theme }) => ({
    color: `${theme.palette.primary.light}`,
    marginBottom: "10px",
    fontSize: "18px",
    textTransform: "uppercase",
    fontFamily: "Oswald",
    fontWeight:900,
    "&:hover": {
      color: `${theme.palette.primary.main}`,
    },
  }));
  const BoxLine = styled(Box)(({ theme }) => ({
    backgroundColor: `${theme.palette.secondary.main}`,
    height:'2px',
    width: "350px",
    marginTop:"10px"
  }));
  
  const StyledRightOne = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: "0px 0px 10px 60px",

  }));
  const StyledRightOneConatiner = styled(Box)(({ theme }) => ({
    height: "25px",
    width: "25px",
    borderRadius: "50%",
    textAlign: "center",
    backgroundColor: `${theme.palette.primary.main}`,
  }));
  const PersonIconNav = styled(PersonIcon)(({ theme }) => ({
    color: `${theme.palette.secondary.main}`,
  }));
  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
            <Box>
            <StyledRightOne>
                <StyledRightOneConatiner>
                  <PersonIconNav />
                </StyledRightOneConatiner>
                <Typography
                  sx={{ margin: "10px", fontSize: "12px" }}
                  component={"span"}
                  variant={"body2"}
                >
                  Sign in
                </Typography>
              </StyledRightOne>
                  <BoxLine sx={{marginLeft:"60px"}}/>

            </Box>
          {PAGES.map((page, index) => {
            return (
              <ListItemButton key={index} sx={{width:"500px"}}>
                <ListItemIcon sx={{marginLeft:"50px"}}>
                  <StyledListItemText >{page}
                  <BoxLine/>

                  </StyledListItemText>
                </ListItemIcon>
              </ListItemButton>
            );
          })}
          <FormControl sx={{ m: 5, width: "43ch",marginLeft:"60px" }} variant="outlined">
                <OutlinedInput
                  sx={{ height: "45px", borderRadius: "40px", color: "#000" }}
                  id="outlined-adornment-weight"
                  endAdornment={
                    <InputAdornment position="end">
                      <SearchIcon sx={{ color: "#000" }} />
                    </InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
              </FormControl>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <StyledMenu />
      </IconButton>
    </React.Fragment>
  );
};
export default DrawerList;
