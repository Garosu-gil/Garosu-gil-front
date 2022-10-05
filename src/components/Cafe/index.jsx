import React from "react";
import Content from "./Content/Content";
import Write from "./Write/Write";
import styled from "@emotion/styled";
const Container = styled.div`
  margin-left: 85px;
`;
const Cafe = () => {
  return (
    <Container>
      <Write />
      <Content />
    </Container>
  );
};

export default Cafe;
