import React from "react";
import styled from "@emotion/styled";

const Button = styled.button`
  border: none;
  color: #fff;
  background: #1363df;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  margin-left: 5px;
  cursor: pointer;
`;
const CustomButton = ({ children, event, type, width, height, fontSize }) => {
  return (
    <Button
      style={{
        width: `${width}`,
        height: `${height}`,
        fontSize: `${fontSize}`,
      }}
      type={type}
      onClick={event}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
