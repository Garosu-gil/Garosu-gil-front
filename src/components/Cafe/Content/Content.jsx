import React, { useRef, useState, useEffect } from "react";
import CustomButton from "../../common/CustomButton";
import * as C from "./Content.style";
import requestApi from "../../../libs/axios";
import { useRouter } from "next/router";
import ContentContainer from "./ContentContainer";

const Content = () => {
  //   let transText;
  const router = useRouter();
  const { name } = router.query;
  const [list, setList] = useState(null);
  //   const [translate, setTranslate] = useState("");

  const getContent = async () => {
    try {
      const {
        data: { postList },
      } = await requestApi.get(`/get_post?name=${name}`);
      setList(postList);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!!name) {
      getContent();
    }
  }, [name]);

  return (
    <>
      <C.Container>
        <h2>{name} 카페 글</h2>
        {list &&
          list.map((data, i) => <ContentContainer key={i} data={data} />)}
      </C.Container>
    </>
  );
};

export default Content;
