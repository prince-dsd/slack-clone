import React from "react";
import {
  MessageWrapper,
  UserImage,
  MessageInfo,
  Username,
  MessageContent,
  TimeSpan,
} from "./Message.styles";
const Message = ({ message, timestamp, user, userImage }) => {
  return (
    <MessageWrapper>
      <UserImage userImage={userImage} />
      <MessageInfo>
        <Username>
          {user}{" "}
          <TimeSpan>{new Date(timestamp?.toDate()).toUTCString()}</TimeSpan>
          <MessageContent>{message}</MessageContent>
        </Username>
      </MessageInfo>
    </MessageWrapper>
  );
};

export default Message;
