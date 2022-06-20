import { Stack, Box, Checkbox } from "@mui/material";
import React from "react";
import { StyledDescription, StyledTitle } from "../../styled/CategoryIntersted";
import { StyledLine } from "../../styled/Footer";
import { InterestedInterFace } from "../../types/interested";

export default function InterestedComponent(props: InterestedInterFace) {
    const label = { inputProps: { "aria-label": "Checkbox demo" } };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;

        console.log(`${value} is ${checked}`);
    };
    return (
        <Stack key={props.id}>
            <Box
                sx={{
                    paddingTop: "25px",
                    display: "flex",
                    margin: "auto",
                    alignItems: "center",
                    justifyContent: "space-around",
                }}
            >
                <Box component="img" src={props.image} height="150px" width="190px" />

                <Box>
                    <StyledTitle>{props.title}</StyledTitle>
                    <StyledDescription>{props.description}</StyledDescription>
                    <Checkbox
                        {...label}
                        name="intersets"
                        value={props.title}
                        onChange={handleChange}
                    />
                    Yes,
                </Box>
            </Box>
            <StyledLine sx={{ width: "650px" }} />
        </Stack>
    );
}
