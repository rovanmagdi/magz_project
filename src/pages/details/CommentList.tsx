import React, { useEffect, useState } from "react";
import Pusher from "pusher-js";
import CommentDetails from "./CommentDetails";
import axios from "axios";
import { Typography } from "@mui/material";

const CommentList = (props: any) => {

    const {handleCommentsNummber} = props;

  const [comments, setComments] = useState<any>([]);



  useEffect(() => {
    axios
      .get(`http://localhost:4000/posts/get_one/${props.id}`)
      .then((response) => {
        setComments(response.data.comments);
        
      });
  }, [props.id]);

  const [pusher, setPusher] = useState<any>(
    () =>
      new Pusher("7d5a00f0cb139e7cc884", {
        cluster: "eu",
      })
  );
  const [channel, setChannel] = useState<any>(() => pusher.subscribe("magz"));

  useEffect(() => {
    channel.bind("new-comment", (data: any) => {
      console.log(data);
      
      if(data._id == props.id) {

        setComments((oldState: any) => ( data.comments ));
        handleCommentsNummber(data.comments.length)
      }
      
    });
  }, [channel,props.id]);

  return (
    <div>
      {comments && comments.length > 0 ? (
        
        comments.map((comment: any) => <CommentDetails comment={comment} key={comment._id}/>)
      ) : (
        <Typography variant="body1"  component="span" sx={{margin:"auto"}}>
          No comments on this post yet. Be the first
        </Typography >
      )}
    </div>
  );
};

export default CommentList;
