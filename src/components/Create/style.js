import styled from "@emotion/styled";

export const Create = styled.div`
  display: flex;
  justify-content: center;
`;

export const CreateContent = styled.div`
  position: relative;
  top: 50px;
  width: 1700px;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const PageTitle = styled.p`
  font-weight: 700;
  font-size: 48px;
  color: #000000;
`;

export const PageContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const SmallTitle = styled.p`
  font-weight: 700;
  font-size: 32px;
`;

export const LeftInputBox = styled.div`
  width: 1000px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const RightInputBox = styled.div`
  width: 650px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const InputWrap = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  height: 100px;
  background: #ffffff;
  border: 5px solid #45a2d7;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  font-size: 30px;
  padding: 0 20px;
`;

export const CategoryList = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #ffffff;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 380px;
  background: #ffffff;
  border: 5px solid #45a2d7;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  font-size: 20px;
  padding: 20px;
  resize: none;
`;

export const Progress = styled.p`
  font-weight: 700;
  font-size: 24px;
  color: #747373;
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

export const InputDescription = styled.p`
  position: absolute;
  bottom: 30px;
  right: 20px;
  font-size: 30px;
  color: #a4a4a4;
`;
