import React from "react";
import {
  SideBarWrapper,
  SideBarHeader,
  SideBarInfo,
  TitleSmall,
  TitleMedium,
  StyledFiber,
  StyledCreate,
} from "./SideBar.styles";
export const SideBar = () => {
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
    </SideBarWrapper>
  );
};
export default SideBar;
