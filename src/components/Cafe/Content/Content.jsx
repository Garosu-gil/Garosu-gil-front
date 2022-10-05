import React from "react";
import CustomButton from "../../common/CustomButton";
import * as C from "./Content.style";

const data = [
  {
    name: "안녕",
    content: "글ㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹ",
    date: "2022/10/05",
  },
  {
    name: "안녕",
    content: "글ㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹ",
    date: "2022/10/05",
  },
  {
    name: "안녕",
    content: "글ㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹ",
    date: "2022/10/05",
  },
  {
    name: "안녕",
    content: "글ㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹ",
    date: "2022/10/05",
  },
];

const Content = () => {
  return (
    <>
      <C.Container>
        <h2>운동카페 글</h2>
        {data.map((data, i) => {
          console.log(data);
          return (
            <C.ContentContainer key={i}>
              <C.MainContentContainer>
                <div>
                  <h3>{data.name}</h3>
                </div>
                <div>
                  <p>{data.content}</p>
                </div>
              </C.MainContentContainer>
              <C.SeconedContentContainer>
                <p>{data.date}</p>
                <CustomButton text="번역" />
              </C.SeconedContentContainer>
            </C.ContentContainer>
          );
        })}
      </C.Container>
    </>
  );
};

export default Content;
