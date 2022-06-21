import { typography } from "@mui/system";
import {styled} from "@mui/material/styles";
import { Card } from "@mui/material";



export const StyledCard = styled(Card)(() => ({
    position: "relative",
    borderRadius: "4px",
    marginTop:"20px"
   
  }));


export const StyledTodayCard = styled(StyledCard)(() => ({
  width: "68%",
  marginTop:"0px", 
 
}));



export const StyledSportCard = styled(StyledCard)(() => ({
  maxWidth: "700px",

  "&:hover": {
    color: "#DD2B2B",
  },
}));

export const StyledLifestyleCard = styled(StyledCard)(() => ({
  width: "380px",
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