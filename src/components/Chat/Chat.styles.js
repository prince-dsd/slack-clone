import styled from "styled-components";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlined from "@material-ui/icons/InfoOutlined";

export const ChatWrapper = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  padding-bottom: 150px;
`;
export const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgrey;
`;
export const ChatHeaderLeft = styled.div``;
export const ChatChannelName = styled.h4`
  display: flex;
  text-transform: lowercase;
`;

export const ChatHeaderRight = styled.div`
  & p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
`;
export const StyledStarBorder = styled(StarBorderOutlinedIcon)`
  margin-left: 10px;
  && {
    font-size: 18px;
  }
`;
export const StyledInfo = styled(InfoOutlined)`
  && {
    margin-right: 5px;
    font-size: 16px;
  }
`;
export const ChatMessages = styled.div``;
