import styled from "@emotion/styled";

export const ContentContainer = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1050px;
  height: auto;
  background: #ffffff;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  margin-bottom: 30px;
`;

export const MainContentContainer = styled.div`
  h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 75px;
  /* justify-content: space-between; */
  .translate {
    color: #1363df;
  }
`;

export const SeconedContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
