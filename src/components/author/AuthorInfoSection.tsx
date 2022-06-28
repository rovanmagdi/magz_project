import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthorInfo from "./AuthorInfo";
import { CircularProgress, Stack } from "@mui/material";
import { Grid, Box } from "@mui/material";
import { QuotePaper } from "../../styled/styledPaper";
import Avatar from "@mui/material/Avatar";
import { getAuthorInfo } from "../../redux/actions/authorAction";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const AuthorInfoSection = () => {
  const { author } = useSelector((state: any) => state);
  // console.log(posts)
  const dispatch: any = useDispatch();

  useEffect(() => {
    // dispatch(getAuthorInfo("62b350b25dc7b38dcce966c8"))
    console.log(author);
  }, [author]);

  return (
    <>
      <Grid container columns={12} gap={10} sx={{ position: 'relative' }}>
        {author.fullName ? (
          <Grid item md={12} sm={12}>
            <Avatar
              sx={{ width: "150px", height: "150px", margin: "auto", position: 'absolute', left: '43%', top: '-75px' }}
              src={author.image}
            ></Avatar>
            <QuotePaper sx={{ textAlign: "center" }} >
              <Box sx={{ paddingTop: "100px" }}>
                <Box sx={{ fontWeight: "bold", textTransform: "capitalize", fontSize: "18px" }}>
                  {author.fullName}

                </Box>
                <Box sx={{width:"400px",margin:"auto"}}>
                  <FormatQuoteIcon />
                  {author.brief}
                  Mostafa Magdy is the New York Times best-selling writer of Heaven Is for Real and Same Kind of Different As Me. The author or coauthor of ten books, Lynn has sold 12 million copies since 2006
                  <FormatQuoteIcon />
                </Box>
                <Stack sx={{ margin: "30px" }}>
                  <Box sx={{ fontWeight: "bold", fontSize: "18px" }}>

                    {author.numOfPosts}
                  </Box>
                  <Box sx={{ fontSize: "18px" }}>
                    Articles
                  </Box>

                </Stack >
              </Box>
            </QuotePaper>
          </Grid>
        ) : (
          <CircularProgress sx={{ margin: "auto" }} />
        )}
      </Grid>
    </>
  );
};

export default AuthorInfoSection;
