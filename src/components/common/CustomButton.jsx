import React from "react";
import styled from "@emotion/styled";
const Button = styled.button`
  border: none;
  color: #fff;
  width: 150px;
  height: 40px;
  background: #1363df;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
`;
const CustomButton = ({ text, event, type }) => {
  return (
    <Button type={type} onClick={event}>
      {text}
    </Button>
  );
};

export default CustomButton;
