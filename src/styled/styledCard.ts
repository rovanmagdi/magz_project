import { typography } from "@mui/system";
import {styled} from "@mui/material/styles";
import { Card } from "@mui/material";



export const StyledCard = styled(Card)(() => ({
    margin: "20px 0 0 20px",
    position: "relative",
    borderRadius: "4px",
   
  }));


export const StyledTodayCard = styled(StyledCard)(() => ({
  width: "600px",
 
}));



export const StyledSportCard = styled(StyledCard)(() => ({
  width: "700px",
  "&:hover": {
    color: "#DD2B2B",
  },
}));

export const StyledLifestyleCard = styled(StyledCard)(() => ({
  width: "300px",
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