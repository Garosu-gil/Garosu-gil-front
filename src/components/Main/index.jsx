import { Category, CafeCard } from "../";
import * as S from "./style";
import * as I from "../../assets";
import { css } from "@emotion/react";
import { useEffect, useState, useRef } from "react";
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

const Main = () => {
  const [cafeList, setCafeList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("게임");
  const searchRef = useRef();

  useEffect(() => {
    selectedCategory && getCafeList();
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

  const searchCafe = async () => {
    const keyword = searchRef.current.value;
    if (!keyword) {
      return alert("검색어를 입력해주세요.");
    }
    try {
      const {
        data: { result },
      } = await requestApi({
        method: "get",
        url: `/search_cafe?word=${keyword}`,
      });
      setSelectedCategory(null);
      setCafeList(result);
    } catch (error) {
      console.log(error);
    }
  };

  const enterEvent = (e) => {
    if (e.key === "Enter") {
      searchCafe();
    }
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
                  selected={category === selectedCategory}
                  key={index}
                  index={index}
                  name={category}
                  event={() => {
                    setSelectedCategory(category);
                    searchRef.current.value = "";
                  }}
                />
              ))}
            </S.CategoryList>
            <S.CategorySearch
              placeholder="내가 이야기하고 싶은 주제는?"
              ref={searchRef}
              onKeyUp={enterEvent}
            />
            <I.SearchIcon />
          </S.CategoryContentWrap>
        </S.CategoryWrap>
        <S.CafeWrap>
          <S.Title>{selectedCategory} 카페들</S.Title>
          <S.CafeList>
            {cafeList?.map((cafe, index) => (
              <CafeCard
                key={index}
                name={cafe.title}
                description={cafe.explanation}
              />
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
