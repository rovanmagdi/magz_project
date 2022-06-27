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
import { log } from "console";
import { useTheme } from "@mui/material";
import { ColorModeContext } from "../../contexts/ColorModeContext";
import { useContext } from "react";
import { SxProps, Theme } from "@mui/material";
import { Search } from "../../redux/actions/searchAction";

const AppbarStyles = (theme: Theme): SxProps<Theme> => {
  const defaultStyles: SxProps<Theme> = {};
  switch (theme.palette.mode) {
    case "dark":
      return {
        ...defaultStyles,
        color: "black",
        backgroundColor: "white",
      };

    case "light": {
      return {
        ...defaultStyles,
        color: "white",
        backgroundColor: "#272727",
      };
    }
  }
};

export default function NavbarBottom() {
  const { toggleColorMode } = useContext(ColorModeContext);
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [subcategories, setSubcategories] = useState([]);
  const subCatergoryState = useSelector((state: any) => state?.Subcategory);
  const nagivate: any = useNavigate();
  const dispatch: any = useDispatch();

  const { page } = useParams();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, id: any) => {
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

  const handleRoute = (page: any) => {
    console.log("go");
    nagivate(`Catergory/${page}`);
  };

  const handelGoSubCategory = (subCatergory: any) => {
    nagivate(`/${page}/${subCatergory}`);
  };
  const [state, setStateList] = useState({
    statePage: "",

  });
  const { statePage } = state;
const [stateSearch,setStateSearch] = useState({ })
  const handLeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    console.log(value);
    setStateSearch(value)

    setStateList({ ...state, [name]: value });
  };

  const handleSearch=(stateSearch:any)=>
  {
    console.log("search");
    dispatch(Search(stateSearch))
   nagivate('/search')
  }
 
  return (
    <>
      <StyledNavBottom sx={AppbarStyles(theme)}>
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
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                    handleClick(event, page._id)
                  }
                  sx={{
                    color: "white",
                    fontFamily: "Oswald",
                    "&:hover": {
                      color: "white",
                    },
                  }}
                >
                  <Box sx={{ fontWeight: "bold" }}>{page._id}</Box>

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
                    <Box
                      sx={{ color: "white", width: "100px", cursor: "pointer" }}
                      key={el._id}
                      onClick={() => handelGoSubCategory(el.title)}
                    >
                      {el?.title}
                    </Box>
                  ))}
                </Menu>
              </FormControl>
            );
          })}
        </StyledListNavLeft>
        <StyledListNavRight>
          <FormControl variant="outlined">
            <OutlinedInput
              sx={{
                height: "30px",
                borderRadius: "40px",
                color: "white",
                border: "0.5px solid #E6E8F0",
                fontSize:"12px"
              }}
              value={statePage}
              onChange={handLeInputChange}
              name="statePage"
              placeholder="Search by Catergory"
              id="outlined-adornment-weight"
             
              endAdornment={
                <InputAdornment position="end" sx={AppbarStyles(theme)}>
                  <SearchIcon sx={{cursor: "pointer"}}onClick={()=>handleSearch(statePage)}/>
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
              label=""
              control={
                <MaterialUISwitch
                  defaultChecked
                  checked={theme.palette.mode === "dark"}
                  onChange={() => toggleColorMode()}
                  sx={{ ml: 4 }}
                />
              }
            />
          </FormGroup>
        </StyledListNavRight>
      </StyledNavBottom>
    </>
  );
}


