import React from "react";
import { Cafe } from "../../components";
import { useRouter } from "next/router";
import useStore from "../../stores/storeContainer";
import { useEffect } from "react";

const cafe = () => {
  return (
    <>
      <Cafe />
    </>
  );
};

export default cafe;
