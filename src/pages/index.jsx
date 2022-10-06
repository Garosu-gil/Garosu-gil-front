import React from "react";
import { Header, Main } from "../components";
import useStore from "../stores/storeContainer";

const Home = () => {
  const { num, setNum } = useStore();

  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default Home;
