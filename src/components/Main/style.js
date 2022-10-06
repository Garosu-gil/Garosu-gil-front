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
  width: 1100px;
  height: 130px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
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

export const AddCafe = styled.a`
  width: 370px;
  height: 280px;
  color: #ffffff;
  background: #1363df;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  font-weight: 700;
  font-size: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const CafeList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 370px 370px 370px 370px;
  grid-template-rows: 280px 280px;
  column-gap: 105px;
  row-gap: 30px;
`;

export const AddCafePlus = styled.span`
  font-size: 100px;
`;
