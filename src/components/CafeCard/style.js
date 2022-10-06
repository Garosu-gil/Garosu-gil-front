import styled from "@emotion/styled";

export const CafeCard = styled.div`
  background: #ffffff;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
`;

export const Name = styled.p`
  font-weight: 500;
  font-size: 30px;
`;

export const Description = styled.p`
  font-size: 15px;
  position: relative;
  top: 30px;
`;
