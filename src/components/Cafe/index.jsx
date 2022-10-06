import React from "react";
import Content from "./Content/Content";
import Write from "./Write/Write";
import styled from "@emotion/styled";
import Header from "../Common/Header";
import Search from "./Search/Search";
import Dictionary from "./Dictionary/Dictionary";
import useStore from "../../stores/storeContainer";
const Container = styled.div`
  width: 100%;
  display: flex;
`;

const RightContainer = styled.div`
  margin-left: 85px;
`;
const LeftContainer = styled.div`
  position: fixed;
  right: 50%;
  top: 180px;
  margin-right: -830px;
  text-align: center;
`;

const Cafe = () => {
  const { showDiction } = useStore();
  return (
    <>
      <Header />
      <Container>
        <RightContainer>
          <Search />
          <Write />
          <Content />
        </RightContainer>
        <LeftContainer>{showDiction && <Dictionary />}</LeftContainer>
      </Container>
    </>
  );
};

export default Cafe;
