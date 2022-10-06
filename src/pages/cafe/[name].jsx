import React from "react";
import { Cafe } from "../../components";
import { useRouter } from "next/router";
import useStore from "../../stores/storeContainer";
import { useEffect } from "react";

const cafe = () => {
  // const { queryName, setQueryName } = useStore();
  // const router = useRouter();
  // const { name } = router.query;

  // console.log(1, name);
  // useEffect(() => {
  //   setQueryName(name);
  // console.log(queryName);
  // }, []);

  return (
    <>
      <Cafe />
    </>
  );
};

export default cafe;
