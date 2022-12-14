import styled from "@emotion/styled";

export const Conatiner = styled.div`
  h2 {
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 15px;
    margin-top: 15px;
  }
`;

export const WriteContainer = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: column;
  width: 1050px;
  height: 200px;
  background: #ffffff;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
`;

export const NameContainer = styled.div`
  display: flex;
  h4 {
    font-size: 15px;
    margin-right: 10px;
  }
  input {
    outline: none;
    border: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: right;
  width: 100%;
  margin-right: 50px;
  margin-bottom: 10px;
`;

export const TextAreaContainer = styled.div`
  position: relative;
  textarea {
    resize: none;
    padding: 30px;
    width: 1000px;
    height: 100px;
    border: none;
    outline-color: transparent;
    font-size: 14px;
  }
  .textLength {
    position: absolute;
    right: 0;
    bottom: 20px;
  }
`;
