import styled from "@emotion/styled";

export const Container = styled.div`
  width: 500px;
  height: 600px;
  padding: 15px;
  background: #ffffff;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  overflow-y: scroll;
`;

export const WordContainer = styled.div`
  height: auto;
  margin-bottom: 10px;
  h4 {
    color: #1363df;
    font-size: 20px;
    font-weight: 700;
    line-height: 38px;
  }
  p {
    line-height: 30px;
    word-break: keep-all;
  }
`;
