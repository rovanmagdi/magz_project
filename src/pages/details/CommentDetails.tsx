import React from "react";

const CommentDetails = (props: any) => {
  console.log(props.comment);

  return (
    <div>
      {props.comment.timestamp}
      {props.comment.user.firstName} - {props.comment.user.lastName} -{" "}
      {props.comment.user.image}
      {props.comment.commentText}
    </div>
  );
};

export default CommentDetails;

