import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthorInfo from "./AuthorInfo";
import { CircularProgress } from "@mui/material";
import { Grid, Box } from "@mui/material";
import { QuotePaper } from "../../styled/styledPaper";
import Avatar from "@mui/material/Avatar";
import { getAuthorInfo } from "../../redux/actions/authorAction";


const AuthorInfoSection = () => {
  const { author } = useSelector((state: any) => state);
  // console.log(posts)
  const dispatch: any = useDispatch();

  useEffect(() => {
    // dispatch(getAuthorInfo("62b350b25dc7b38dcce966c8"))
    console.log(author.posts);
  }, [author]);

  return (
    <>
      <Grid container columns={12} gap={10} sx={{position:'relative'}}>
        {author.fullName ? (
          <Grid item md={12} sm={12}>
             <Avatar
            sx={{ width: "150px", height: "150px", margin: "auto" ,position:'absolute',left:'43%',top:'-75px'}}
            src={author.image}
          ></Avatar>
            <QuotePaper {...author} />
          </Grid>
        ) : (
          <CircularProgress sx={{ margin: "auto" }} />
        )}
      </Grid>
    </>
  );
};

export default AuthorInfoSection;
