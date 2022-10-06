import { useRouter } from "next/router";
import { useRef } from "react";
import React from "react";
import CustomButton from "../../Common/CustomButton";
import * as C from "./Content.style";

const data = [
  {
    name: "안녕",
    content: "글ㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹ",
    date: "2022/10/05",
  },
  {
    name: "안녕",
    content: "글ㄹㄹㄹㄹㄹ13ㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹ",
    date: "2022/10/05",
  },
  {
    name: "안녕",
    content: "글ㄹㄹㄹㄹㄹ525ㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹ",
    date: "2022/10/05",
  },
  {
    name: "안녕",
    content: "글ㄹㄹㄹㄹㄹ123123ㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹ",
    date: "2022/10/05",
  },
];

const Content = () => {
  const contentRef = useRef("");
  const router = useRouter();
  const { id } = router.query;
  let transText;
  const onClickTrans = (t) => {
    transText = t;
    console.log(transText);
  };
  return (
    <>
      <C.Container>
        <h2>{id}카페 글</h2>
        {data.map((data, i) => {
          return (
            <C.ContentContainer key={i}>
              <C.MainContentContainer>
                <div>
                  <h3>{data.name}</h3>
                </div>
                <div>
                  <p ref={contentRef}>{data.content}</p>
                </div>
              </C.MainContentContainer>
              <C.SeconedContentContainer>
                <p>{data.date}</p>
                <CustomButton
                  text="번역"
                  event={() => onClickTrans(data.content)}
                />
              </C.SeconedContentContainer>
            </C.ContentContainer>
          );
        })}
      </C.Container>
    </>
  );
};

export default Content;
