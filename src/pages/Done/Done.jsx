import { Box, Checkbox, Grid } from "@mui/material";
import FooterSign from "../../components/footerSign/FooterSign";
import NavbarSign from "../../components/navbarSign/NavbarSign";
import StepperTab from "../../components/stepper/Stepper";
import { styled } from "@mui/material/styles";
import { Content, Home, Info } from "../../styled/HomePage";
import { StyledLine } from "../../styled/Footer";
import { StyledButton } from "../../styled/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Doneimg from '../../assets/done.png'
import { useNavigate } from "react-router-dom";
const Done = () => {
  const StyledGridRightTitle = styled(Box)(({ theme }) => ({
    display: "flex",
    fontFamily: "Oswald",
    fontWeight: "800",
    fontSize: "14px",
    textTransform: "uppercase",
    position: "absolute",
    paddingLeft: "20px",
    marginTop: "-10px",
    backgroundColor: "white",
  }));
  const StyledGridRightLine = styled(Box)(({ theme }) => ({
    backgroundColor: `${theme.palette.primary.light}`,
    height: "3px",
    width: "370px",
    borderRadius: "10px",
    margin: "8px 0px 0px 15px",
  }));
 

const nagivate=useNavigate()
  const handleGoDone=()=>
  {
    nagivate("/")
  }
  return (
    <Box>
      <Home />
      <Content>
        <NavbarSign />
        <StepperTab activeStep={2}/>
        <Box
          sx={{
            // display: "flex",
            border: `1px solid #D9D9D9`,
            // margin: "0px 150px 0px 200px",
            margin:"auto",
            maxWidth:"800px",
            height: "auto",
            // position: "relative",
          }}
        >
          <StyledGridRightTitle sx={{ color: "black", marginBottom: "50px" }}>
            Done
            <StyledGridRightLine />
          </StyledGridRightTitle>
            <Box sx={{transform: "translateX(30%)",marginTop:"50px"}}>
                <Box component="img"  src={Doneimg}/>
            </Box>
          <StyledButton
            endIcon={<ArrowForwardIcon />}
            sx={{ color: "white", transform: "translateX(300%)" }}
            onClick={handleGoDone}
          >
            Continue
          </StyledButton>
        </Box>
        <FooterSign />
      </Content>
    </Box>
  );
};

export default Done;
