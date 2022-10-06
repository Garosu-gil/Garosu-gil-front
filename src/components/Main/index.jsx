import { Category } from "../";
import * as S from "./style";
import * as I from "../../assets";
import { css } from "@emotion/react";

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

const Main = () => {
  return (
    <S.Main>
      <S.MainContent>
        <S.CategoryWrap>
          <S.Title>카테고리</S.Title>
          <S.CategoryContentWrap>
            <S.CategoryList>
              {categories.map((category, index) => (
                <Category key={index} name={category} />
              ))}
            </S.CategoryList>
            <S.CategorySearch placeholder="내가 이야기하고 싶은 주제는?" />
            <I.SearchIcon />
          </S.CategoryContentWrap>
        </S.CategoryWrap>
        <S.CafeWrap>
          <S.Title>운동 카페들</S.Title>
        </S.CafeWrap>
      </S.MainContent>
    </S.Main>
  );
};

export default Main;
