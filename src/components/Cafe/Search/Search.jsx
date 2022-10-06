import React from "react";
import { useState } from "react";
import SmallSearchIcon from "../../../assets/SmallSearchIcon";
import * as S from "./Search.style";
const Search = () => {
  const [searchText, setSearchText] = useState("");
  const DELAY = 500;
  let timer;

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const onChangeInput = (e) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(handleChange(e), DELAY);
  };
  return (
    <S.Container>
      <S.InputContainer>
        <SmallSearchIcon />
        <input type="text" onChange={onChangeInput} />
      </S.InputContainer>
    </S.Container>
  );
};

export default Search;
