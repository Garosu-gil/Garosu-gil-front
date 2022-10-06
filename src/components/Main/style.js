import styled from "@emotion/styled";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainContent = styled.div`
  width: 1800px;
  position: relative;
  top: 50px;
`;

export const CategoryWrap = styled.div`
  height: 210px;
  color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 32px;
`;

export const CategoryContentWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > svg {
    position: absolute;
    right: 20px;
  }
`;

export const CategoryList = styled.div`
  width: 1200px;
  height: 130px;
  display: flex;
  justify-content: space-evenly;
  background: #ffffff;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
`;

export const CategorySearch = styled.input`
  width: 580px;
  height: 110px;
  background: #ffffff;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  border: none;
  border: 1px solid #45a2d7;
  font-size: 30px;
  padding: 0 20px;
  ::placeholder {
    font-weight: 700;
  }
`;

export const CafeWrap = styled.div`
  width: 100%;
  position: relative;
  top: 50px;
`;
