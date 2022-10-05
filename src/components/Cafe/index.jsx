import React from "react";
import Content from "./Content/Content";
import Write from "./Write/Write";
import styled from "@emotion/styled";
import Header from "../Common/Header";
const Container = styled.div`
  margin-left: 85px;
`;
const Cafe = () => {
  return (
    <>
      <Header />
      <Container>
        <Write />
        <Content />
      </Container>
    </>
  );
};

export default Cafe;
