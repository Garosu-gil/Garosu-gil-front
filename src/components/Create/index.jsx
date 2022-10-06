import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
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
  const titleRef = useRef();
  const explanationRef = useRef();
  const { replace } = useRouter();

  const createCafe = async () => {
    const title = titleRef.current?.value;
    const explanation = explanationRef.current?.value;
    if (!(title && explanation)) {
      alert("제목과 설명을 확인해주세요.");
      return;
    }
    const data = {
      title: titleRef.current?.value,
      category: selected,
      explanation: explanationRef.current?.value,
    };
    try {
      await requestApi({ url: "/create_cafe", method: "post", data: data });
      replace(`/cafe/${title}`);
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
              <S.Input ref={titleRef} />
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
            <S.Textarea ref={explanationRef} />
            <S.Progress>0 / 100</S.Progress>
          </S.RightInputBox>
        </S.PageContent>
        <CustomButton
          width="240px"
          height="70px"
          fontSize="32px"
          text="생성"
          event={createCafe}
          type="submit"
        />
      </S.CreateContent>
    </S.Create>
  );
};

export default Create;
