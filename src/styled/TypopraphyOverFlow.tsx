import { Typography } from "@mui/material";
import { styled } from "@mui/material";

export const TypographyOverFlow = styled(Typography)(({ theme }) => ({
    height:" 45px",
           overflowY: "hidden",
  }));