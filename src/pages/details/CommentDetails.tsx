import React from "react";

const CommentDetails = (props: any) => {
    console.log(props.comment);
    
  return <div>{props.comment.user.firstName} - {props.comment.user.lastName} - {props.comment.commentText}</div>;
};

export default CommentDetails;
