import styled from "styled-components";

export const MessageWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

export const UserImage = styled.img.attrs(({ userImage }) => ({
  src: `${userImage}`,
}))`
  height: 50px;
  width: 50px;
  object-fit: contain;
`;
export const MessageInfo = styled.div`
  padding-left: 10px;
`;
export const Username = styled.h4``;
export const MessageContent = styled.p``;
export const TimeSpan = styled.span`
  color: #333;
  font-weight: 300;
  font-size: 13px;
`;
