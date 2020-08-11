import React from "react";
import {
  HeaderWrapper,
  HeaderLeft,
  HeaderSearch,
  HeaderRight,
  SearchInput,
  StyledAvatar,
  StyledSearch,
  StyledAccessTime,
  StyledHelpOutline,
} from "./Header.styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderLeft>
        {/* Avatar for logged in user*/}
        <StyledAvatar />
        <StyledAccessTime />
      </HeaderLeft>

      <HeaderSearch>
        <StyledSearch />
        <SearchInput />
      </HeaderSearch>
      <HeaderRight>
        <StyledHelpOutline />
      </HeaderRight>
    </HeaderWrapper>
  );
};
export default Header;
