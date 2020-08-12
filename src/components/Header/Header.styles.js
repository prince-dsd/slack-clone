import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import HelopOutlineIcon from "@material-ui/icons/HelpOutline";
import SearchIcon from "@material-ui/icons/Search";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: #fff;
`;

export const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;

  align-items: center;
  margin-left: 20px;
`;
export const HeaderSearch = styled.div`
  flex: 0.4;
  background-color: #421f44;
  text-align: center;
  display: flex;
  padding: 0 50px;
  border: 1px gray solid;
  border-radius: 6px;
  color: gray;
`;

export const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;
`;

export const StyledAvatar = styled(Avatar).attrs({
  src: "",
  alt: "",
})``;
export const StyledSearch = styled(SearchIcon)`
  margin-left: auto;
  margin-right: 30px;
`;
export const StyledAccessTime = styled(AccessTimeIcon)`
  margin-left: auto;
  margin-right: 20px;
`;
export const StyledHelpOutline = styled(HelopOutlineIcon)`
  margin-left: auto;
  margin-right: 20px;
`;
export const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  text-align: center;
  min-width: 35vw;
`;
