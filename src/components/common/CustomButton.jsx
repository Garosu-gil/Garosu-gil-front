import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Button = styled.button`
  border: none;
  color: #fff;
  background: #1363df;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  cursor: pointer;
`;

const CustomButton = ({ text, event, type, width, height, fontSize }) => {
  return (
    <Button
      css={css`
        width: ${width};
        height: ${height};
        font-size: ${fontSize};
      `}
      type={type}
      onClick={event}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
