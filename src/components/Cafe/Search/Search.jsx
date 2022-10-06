import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import SmallSearchIcon from "../../../assets/SmallSearchIcon";
import requestApi from "../../../libs/axios";
import useStore from "../../../stores/storeContainer";
import * as S from "./Search.style";
const Search = () => {
  let searchText = "";
  const searchRef = useRef("");
  const { list, setList } = useStore();
  const DELAY = 500;
  let timer;

  const getSearchData = async () => {
    console.log(list);
    const {
      data: { post_list },
    } = await requestApi.get(`search_post?content=${searchText}`);
    setList(post_list);
  };

  const onChangeInput = () => {
    if (timer) clearTimeout(timer);
    searchText = searchRef.current.value;
    timer = setTimeout(getSearchData, DELAY);
  };
  return (
    <S.Container>
      <S.InputContainer>
        <SmallSearchIcon />
        <input type="text" ref={searchRef} onChange={onChangeInput} />
      </S.InputContainer>
    </S.Container>
  );
};

export default Search;
