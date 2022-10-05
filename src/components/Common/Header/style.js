import styled from "@emotion/styled";

export const Header = styled.header`
  background: #06283d;
  padding: 0 60px;
  height: 130px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 75px;
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const TitleDesc = styled.p`
  font-weight: 400;
  font-size: 20px;
`;

export const LogoWrapper = styled.div`
  width: 230px;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.p`
  font-weight: 600;
  font-size: 48px;
`;

export const CafeName = styled.p`
  font-weight: 700;
  font-size: 30px;
`;
