
import { useSelector } from "react-redux"
import not_found from '../../assets/not_found.png'

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { palette } from "@mui/system";
import { CategoryLabelBox, HorizontalLineBox } from "../../styled/styledBox";
import { OverlaySportBox } from "../../styled/styledBox";
import { StyledSportCard } from "../../styled/styledCard";
import { TypographyCardTitle } from "../../styled/styledTypography";
import { DateTypography } from "../../styled/styledTypography";
import PostDate from "../../components/postDate/PostDate";
import { ReadMoreTypography } from "../../styled/styledTypography";
import { TypographyOverFlow } from "../../styled/styledTypography";
import { useNavigate } from "react-router-dom";


const Search = () => {
    const { search } = useSelector((state: any) => state);
    const nagivate: any = useNavigate();
    const handleGoDetails = (id: any) => {
        nagivate(`/details/${id}`);
    };
    return (
        // <Stack sx={{ margin: "auto", maxWidth: "50%" }}>
        <>{search && search.length > 0 ? (
            search.map((item: any) => {
                return (
                    <StyledSportCard elevation={0} onClick={() => handleGoDetails(item._id)} key={item._id}>
                        <CardActionArea>
                            <Stack direction={"row"}>
                                <CardMedia
                                    component="img"
                                    sx={{ borderRadius: "2px", maxWidth: "340px" }}
                                    height={275}
                                    image={item.image}
                                    alt="green iguana"
                                />
                                <OverlaySportBox>
                                    <ReadMoreTypography>read more...</ReadMoreTypography>
                                </OverlaySportBox>
                                <CardContent>
                                    <TypographyCardTitle gutterBottom>{item.title}</TypographyCardTitle>
                                    <DateTypography>
                                        <Box sx={{ color: "text.secondary", fontSize: "13px" }}>
                                            {<PostDate date={item.updatedAt} />}
                                        </Box>
                                    </DateTypography>
                                    <Box height="80px" overflow={"hidden"}>
                                        <TypographyOverFlow
                                            sx={{ height: "150px" }}
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            {item.description}...
                                        </TypographyOverFlow>
                                    </Box>
                                    <CardActions>
                                        <Box
                                            component="img"
                                            height="30px"
                                            width="30px"
                                            borderRadius="50%"
                                            marginRight={2}
                                            marginLeft={-1}
                                            //   src={autherImage}
                                            alt="green iguana"
                                        />
                                        {/* <Typography textTransform={"capitalize"}>{ autherFirstName+" "+ autherLastName}</Typography> */}

                                    </CardActions>
                                </CardContent>
                            </Stack>
                        </CardActionArea>
                    </StyledSportCard>
                )
            })

        ) : (<Box sx={{textAlign: "center"}}>Not Result</Box>)}

        </>


        // </Stack>


    )
}
export default Search;