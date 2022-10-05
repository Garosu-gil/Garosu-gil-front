import React from "react";
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
              <h4>{data.name}</h4>
              <p>{data.content}</p>
              <p>{data.date}</p>
            </C.ContentContainer>
          );
        })}
      </C.Container>
    </>
  );
};

export default Content;
