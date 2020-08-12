import React from "react";
import {
  OptionWrapper,
  SideBarOptionHash,
  Title,
  Channel,
} from "./SideBarOption.styles";
import { useHistory } from "react-router-dom";
import db from "../../../firebase";
const SideBarOption = ({ Icon, title, id, addChannelOption }) => {
  const history = useHistory();
  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push("title");
    }
  };
  const addChannel = () => {
    const channelName = prompt("Please Enter channel name");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

  return (
    <OptionWrapper onClick={addChannelOption ? addChannel : selectChannel}>
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <Title>{title}</Title>
      ) : (
        <Channel>
          <SideBarOptionHash># </SideBarOptionHash>
          {title}
        </Channel>
      )}
    </OptionWrapper>
  );
};

export default SideBarOption;
