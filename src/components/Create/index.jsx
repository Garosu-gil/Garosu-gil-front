import { css } from "@emotion/react";
import * as S from "./style";

const Create = () => {
  return (
    <S.Create>
      <S.CreateContent>
        <S.PageTitle>카페 생성</S.PageTitle>
        <S.PageContent>
          <S.LeftInputBox>
            <S.InputWrap>
              <S.SmallTitle>카페 이름</S.SmallTitle>
              <S.Input />
            </S.InputWrap>
            <S.InputWrap>
              <S.SmallTitle>카테고리</S.SmallTitle>
              <S.Input />
            </S.InputWrap>
          </S.LeftInputBox>
          <S.RightInputBox>
            <S.SmallTitle>설명</S.SmallTitle>
            <S.Textarea />
          </S.RightInputBox>
        </S.PageContent>
      </S.CreateContent>
    </S.Create>
  );
};

export default Create;
