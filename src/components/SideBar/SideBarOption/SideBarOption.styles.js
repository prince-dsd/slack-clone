import styled from "styled-components";
export const OptionWrapper = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    background-color: #340e36;
  }
  & .sidebarOption__icon {
    font-size: 15px;
    fill: #fff;
    color: #fff;
    margin: 10px;
  }
`;
export const Title = styled.h3`
  font-weight: 500;
  padding: 10px;
`;
export const Channel = styled.h3`
  padding: 10px 0;
  font-weight: 500;
`;
export const SideBarOptionHash = styled.span`
  padding: 10px;
`;
