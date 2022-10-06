import React from "react";
import Content from "./Content/Content";
import Write from "./Write/Write";
import styled from "@emotion/styled";
import Header from "../Common/Header";
import Search from "./Search/Search";
const Container = styled.div`
  width: 1;
`;
const Cafe = () => {
  return (
    <>
      <Header />
      <Container>
        <Search />
        <Write />
        <Content />
      </Container>
    </>
  );
};

export default Cafe;
