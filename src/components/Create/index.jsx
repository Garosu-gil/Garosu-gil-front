import { css } from "@emotion/react";
import { useState } from "react";
import { CustomButton, Category } from "../";
import requestApi from "../../libs/axios";
import * as S from "./style";

const categories = [
  "게임",
  "스포츠",
  "IT",
  "여행",
  "취미",
  "방송",
  "생활",
  "기타",
];

const Create = () => {
  const [selected, setSelected] = useState("게임");

  const createCafe = async () => {
    const data = { title: "test", category: selected, explanation: "test" };
    try {
      await requestApi({ url: "/create_cafe", method: "post", data: data });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.Create>
      <S.CreateContent>
        <S.PageTitle>카페 생성</S.PageTitle>
        <S.PageContent>
          <S.LeftInputBox>
            <S.InputWrap>
              <S.SmallTitle>카페 이름</S.SmallTitle>
              <S.Input />
              <S.InputDescription>
                카페 (카페는 생략하고 적어주세요.)
              </S.InputDescription>
            </S.InputWrap>
            <S.InputWrap>
              <S.SmallTitle>카테고리</S.SmallTitle>
              <S.CategoryList>
                {categories.map((category, index) => (
                  <Category
                    selected={category === selected}
                    key={index}
                    index={index}
                    name={category}
                    event={() => {
                      setSelected(category);
                    }}
                  />
                ))}
              </S.CategoryList>
            </S.InputWrap>
          </S.LeftInputBox>
          <S.RightInputBox>
            <S.SmallTitle>설명</S.SmallTitle>
            <S.Textarea />
            <S.Progress>0 / 100</S.Progress>
          </S.RightInputBox>
        </S.PageContent>
        <CustomButton
          width="240px"
          height="70px"
          fontSize="32px"
          text="생성"
          event={() => {
            createCafe;
          }}
          type="submit"
        />
      </S.CreateContent>
    </S.Create>
  );
};

export default Create;
