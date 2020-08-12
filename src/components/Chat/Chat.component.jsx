import React, { useState, useEffect } from "react";
import {
  ChatWrapper,
  ChatHeader,
  ChatHeaderLeft,
  ChatHeaderRight,
  ChatChannelName,
  ChatMessages,
  StyledStarBorder,
  StyledInfo,
} from "./Chat.styles";
import { useParams } from "react-router-dom";
import db from "../../firebase";

//Components
import Message from "../Message/Message.component";

const Chat = () => {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);
  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }
    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);
  return (
    <ChatWrapper>
      <ChatHeader>
        <ChatHeaderLeft>
          <ChatChannelName>
            <strong>#{roomDetails?.name}</strong>
            <StyledStarBorder />
          </ChatChannelName>
        </ChatHeaderLeft>
        <ChatHeaderRight>
          <p>
            <StyledInfo /> Details
          </p>
        </ChatHeaderRight>
      </ChatHeader>
      <ChatMessages>
        {roomMessages.map(({ message, timestamp, userImage, user }) => (
          <Message
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
          />
        ))}
      </ChatMessages>
    </ChatWrapper>
  );
};

export default Chat;
