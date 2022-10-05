import { css } from "@emotion/react";
import * as S from "./style";

export default function Hello() {
  return (
    <S.Hello
      css={css`
        background-color: white;
      `}
    ></S.Hello>
  );
}
