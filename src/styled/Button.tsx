import {styled} from "@mui/material/styles";
import { Button } from "@mui/material";

export const StyledButton = styled(Button)(({ theme }) => ({
    width: "auto",
    margin: "auto",
    marginTop: "20px",
    fontFamily:"Oswald",
    textTransform: "uppercase",
    backgroundColor:`rgba(77,126,150,0.8)`,
    "&:hover":{
    backgroundColor:`${theme.palette.primary.main}`

    }
  }));
