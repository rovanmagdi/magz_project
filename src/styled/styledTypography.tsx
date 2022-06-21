import { Typography } from "@mui/material";
import { styled } from "@mui/material";

export const PostTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: ".9em",
  // width:'250px',
  // ahmed
  // ahmed
  // ahmed
}));

export const PostDate = styled(Typography)(({ theme }) => ({
  fontSize: ".8em",
  color: "gray",
  // ahmed
  //ahmed
}));

export const AutherName = styled(Typography)(({ theme }) => ({
  fontSize: "1em",
  color: "black",
  // ahmed
  //ahmed
}));

export const TypographyCardTitle = styled(Typography)(() => ({
  fontSize: "1.1em",
  fontWeight: "700",
  overflow: "hidden",
  height: "45px",
  // ahmed
}));
