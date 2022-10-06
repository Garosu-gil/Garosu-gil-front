import * as S from "./style";
import * as I from "../../assets";
import { css } from "@emotion/react";

const Category = ({ name, index, selected, event }) => {
  const icon = () => {
    switch (index) {
      case 0:
        return <I.Game />;
      case 1:
        return <I.Sport />;
      case 2:
        return <I.IT />;
      case 3:
        return <I.Trip />;
      case 4:
        return <I.Hobby />;
      case 5:
        return <I.Broadcast />;
      case 6:
        return <I.Life />;
      case 7:
        return <I.Etc />;
    }
  };

  return (
    <S.Category
      onClick={event}
      css={
        selected &&
        css`
          background: #45a2d7;
          color: #ffffff;
        `
      }
    >
      {icon()}
      <S.Name>{name}</S.Name>
    </S.Category>
  );
};

export default Category;
