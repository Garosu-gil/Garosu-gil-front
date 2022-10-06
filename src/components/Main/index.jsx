import { Category, CafeCard } from "../";
import * as S from "./style";
import * as I from "../../assets";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import requestApi from "../../libs/axios";

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

const mockCafes = ["농구", "a", "a", "a", "a", "a", "a", "a", "a", "a"];

const Main = () => {
  const [selected, setSelected] = useState(0);
  const [cafeList, setCafeList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("게임");

  useEffect(() => {
    getCafeList();
  }, [selectedCategory]);

  const getCafeList = async () => {
    const {
      data: { result },
    } = await requestApi({
      method: "get",
      url: `/find_category?category=${selectedCategory}`,
    });
    setCafeList(result);
  };

  return (
    <S.Main>
      <S.MainContent>
        <S.CategoryWrap>
          <S.Title>카테고리</S.Title>
          <S.CategoryContentWrap>
            <S.CategoryList>
              {categories.map((category, index) => (
                <Category
                  selected={index === selected}
                  key={index}
                  index={index}
                  name={category}
                  event={() => {
                    setSelected(index);
                    setSelectedCategory(category);
                  }}
                />
              ))}
            </S.CategoryList>
            <S.CategorySearch placeholder="내가 이야기하고 싶은 주제는?" />
            <I.SearchIcon />
          </S.CategoryContentWrap>
        </S.CategoryWrap>
        <S.CafeWrap>
          <S.Title>운동 카페들</S.Title>
          <S.CafeList>
            {cafeList?.map((cafe, index) => (
              <CafeCard key={index} name={cafe} description={cafe} />
            ))}
            <Link href="/create">
              <S.AddCafe>
                <S.AddCafePlus>+</S.AddCafePlus>
                카페 추가
              </S.AddCafe>
            </Link>
          </S.CafeList>
        </S.CafeWrap>
      </S.MainContent>
    </S.Main>
  );
};

export default Main;
