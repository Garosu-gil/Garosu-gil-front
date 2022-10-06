import * as S from "./style";
import * as I from "../../../assets";
import { css } from "@emotion/react";
import Link from "next/link";

const Header = ({ cafeName }) => {
  return (
    <S.Header>
      <Link href="/">
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
      </Link>
      {cafeName && <S.CafeName>{cafeName}</S.CafeName>}
    </S.Header>
  );
};

export default Header;
