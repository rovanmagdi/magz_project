import { styled } from "@mui/material/styles";
import { InputBase, TextField } from "@mui/material";

export const BootstrapInput = styled(TextField)(({ theme }) => ({
  borderRadius: 4,
  position: "relative",
  backgroundColor:
    theme.palette.mode === "light"
      ? `${theme.palette.success.dark}`
      : "#2b2b2b",

  display: "block",
  fontSize: 16,
  width: "auto",
  color: `${theme.palette.primary.main}`,
  // padding: '10px 12px',
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
