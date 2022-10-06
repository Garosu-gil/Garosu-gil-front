import * as S from "./style";
import Link from "next/link";

const CafeCard = ({ name, description }) => {
  return (
    <Link href={`/cafe/${name}`}>
      <S.CafeCard>
        <S.Name>{name} 카페</S.Name>
        <S.Description>{description}</S.Description>
      </S.CafeCard>
    </Link>
  );
};

export default CafeCard;
