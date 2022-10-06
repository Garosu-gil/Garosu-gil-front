import * as S from "./style";
import * as I from "../../../assets";
import { css } from "@emotion/react";

const Header = () => {
  return (
    <S.Header>
      <S.Title>
        <S.TitleDesc>너만의 카페를 만들어 봐</S.TitleDesc>
        <S.LogoWrapper>
          <S.Logo>가로수길</S.Logo>
          <I.Logo
            css={css`
              background-color: black;
            `}
          />
        </S.LogoWrapper>
      </S.Title>
      <S.CafeName>농구카페</S.CafeName>
    </S.Header>
  );
};

export default Header;
