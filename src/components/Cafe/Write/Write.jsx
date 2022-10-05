import React from "react";
import { useState } from "react";
import * as W from "./Write.style";
import CustomButton from "../../common/CustomButton";

const Write = () => {
  const buttonEvent = () => {
    console.log(1);
  };
  const [text, setText] = useState("");
  const onChangeTextArea = (e) => {
    setText(e.target.value);
  };
  return (
    <W.Conatiner>
      <h2>글작성</h2>
      <W.WriteContainer>
        <W.TextAreaContainer>
          <textarea
            placeholder="카페에 올릴 글을 써 주세요"
            maxLength={100}
            onChange={onChangeTextArea}
          ></textarea>
          <p className="textLength">{text.length}/100</p>
        </W.TextAreaContainer>
        <W.ButtonContainer>
          <CustomButton
            text={"작성"}
            type={"button"}
            event={buttonEvent}
            width="140px"
            height="40px"
            fontSize="10px"
          />
        </W.ButtonContainer>
      </W.WriteContainer>
    </W.Conatiner>
  );
};

export default Write;
