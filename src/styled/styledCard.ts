import { typography } from "@mui/system";
import {styled} from "@mui/material/styles";
import { Card } from "@mui/material";



export const StyledCard = styled(Card)(() => ({
    position: "relative",
    borderRadius: "4px",
    marginTop:"20px"
   
  }));


export const StyledTodayCard = styled(StyledCard)(() => ({
  // minWidth: "65%",
  marginTop:"0px", 
 
}));



export const StyledSportCard = styled(StyledCard)(() => ({
  maxWidth: "700px",

  "&:hover": {
    color: "#DD2B2B",
  },
}));

export const StyledLifestyleCard = styled(StyledCard)(() => ({
  width: "370px",
  "&:hover": {
    color: "#22b8b3",
  },
}));

export const StyledOpinionCard = styled(StyledLifestyleCard)(() => ({
    "&:hover": {
      color: "#C29653",
    },
  }));

export const StyledCultureCard = styled(StyledLifestyleCard)(() => ({

    "&:hover": {
      color: "#128CCB",
    },
  }));


  export const StyledSportMobileCard = styled(StyledLifestyleCard)(() => ({
  
    "&:hover": {
      color: "#DD2B2B",
    },
  }));



  export const StyledAuthorPostCard = styled(StyledCard)(() => ({
    width: "350px",
      color: "#4D7E96"
    
  }));