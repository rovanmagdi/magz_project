import { styled } from "@mui/material/styles";
import { InputBase, TextField } from "@mui/material";

export const BootstrapInput = styled(InputBase)(({ theme }) => ({
  borderRadius: 4,
  position: "relative",
  width:"280px",
  height:"45px",
  padding:"5px",
  backgroundColor:
    theme.palette.mode === "light"
      ? `rgba(99,142,163,0.2)`
      : "#2b2b2b",

  display: "block",
  fontSize: 16,
 
  color: `${theme.palette.primary.main}`,
  transition: theme.transitions.create([
    "border-color",
    "background-color",
    "box-shadow",
  ]),

  "&:focus": {
    boxShadow: `${(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
    borderColor: theme.palette.primary.main,
  },
}));
