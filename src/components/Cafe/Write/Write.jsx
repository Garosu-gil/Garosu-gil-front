import React, { useRef } from "react";
import { useState } from "react";
import * as W from "./Write.style";
import CustomButton from "../../common/CustomButton";
import requestApi from "../../../libs/axios";
import { useRouter } from "next/router";

const Write = () => {
  const [text, setText] = useState("");
  const nameRef = useRef("");
  // const titleRef = useRef("");
  const router = useRouter();
  const { name } = router.query;

  const postContent = async () => {
    const userName = nameRef.current.value;
    // const title = titleRef.current.value;
    const data = {
      context: text,
      cafeName: name,
      nickName: userName,
    };
    console.log(data);
    try {
      await requestApi({
        method: "post",
        url: "/create_post",
        data: data,
      });
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  const onChangeTextArea = (e) => {
    setText(e.target.value);
  };

  return (
    <W.Conatiner>
      <h2>글작성</h2>
      <W.WriteContainer>
        <W.NameContainer>
          <h4>인플루언서 명</h4>
          <input type="text" placeholder="닉네임" ref={nameRef} />
        </W.NameContainer>
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
            type="button"
            event={postContent}
            width="140px"
            height="40px"
            fontSize="14px"
          >
            작성
          </CustomButton>
        </W.ButtonContainer>
      </W.WriteContainer>
    </W.Conatiner>
  );
};

export default Write;
