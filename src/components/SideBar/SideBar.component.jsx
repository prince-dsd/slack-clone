import React, { useState, useEffect } from "react";
import {
  SideBarWrapper,
  SideBarHeader,
  SideBarInfo,
  TitleSmall,
  TitleMedium,
  StyledFiber,
  StyledCreate,
  StyledInsert,
} from "./SideBar.styles";
//Material UI Icons
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import SideBarOption from "./SideBarOption/SideBarOption.component";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";

import db from "../../firebase";
export const SideBar = () => {
  const [channels, setChannels] = useState([]);
  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
    return () => {};
  }, []);
  return (
    <SideBarWrapper>
      <SideBarHeader>
        <SideBarInfo>
          <TitleMedium>Sudo Corvus</TitleMedium>
          <TitleSmall>
            <StyledFiber />
            John Doe
          </TitleSmall>
        </SideBarInfo>
        <StyledCreate />
      </SideBarHeader>
      <SideBarOption Icon={StyledInsert} title="Threads" />
      <SideBarOption Icon={InboxIcon} title="Mentions & reactions" />
      <SideBarOption Icon={DraftsIcon} title="Saved Items" />
      <SideBarOption Icon={BookmarkBorderIcon} title="Channel Browser" />
      <SideBarOption Icon={PeopleAltIcon} title="People & User Group" />
      <SideBarOption Icon={AppsIcon} title="Apps" />
      <SideBarOption Icon={FileCopyIcon} title="File Browser" />

      <SideBarOption Icon={ExpandLessIcon} title="Show less" />
      <hr />
      <SideBarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SideBarOption Icon={AddIcon} addChannelOption title="Add Channel" />

      {channels.map((channel) => (
        <SideBarOption title={channel.name} id={channel.id} />
      ))}
    </SideBarWrapper>
  );
};
export default SideBar;
