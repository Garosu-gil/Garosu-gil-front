import React from "react";
import useStore from "../../../stores/storeContainer";
import * as D from "./Dictionary.style";

const Dictionary = () => {
  const { dictionData } = useStore();
  return (
    <D.Container>
      {dictionData.map((data, i) => (
        <D.WordContainer key={i}>
          <h4>{data.title}</h4>
          <p>{data.description}</p>
        </D.WordContainer>
      ))}
    </D.Container>
  );
};

export default Dictionary;
