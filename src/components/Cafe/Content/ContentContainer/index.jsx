import { useState } from "react";
import requestApi from "../../../../libs/axios";
import CustomButton from "../../../common/CustomButton";
import * as C from "./style";

const ContentContainer = ({ data }) => {
  const [translate, setTranslate] = useState("");
  const translateLang = [
    { langSourse: "ko", lang: "한국어" },
    { langSourse: "zh-CN", lang: "中国话" },
    { langSourse: "ja", lang: "日本語" },
    { langSourse: "en", lang: "English" },
  ];

  console.log(data.source);
  const getTranslate = async (transText, langSourse) => {
    try {
      console.log(langSourse);
      const { data } = await requestApi.get(
        `/translate?target=${langSourse}&text=${transText}`
      );
      console.log(data);
      setTranslate(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <C.ContentContainer>
      <C.MainContentContainer>
        <div>
          <h3>{data.name}</h3>
        </div>
        <div>
          <p>{data.content}</p>
        </div>
        {translate && (
          <div>
            <p className="translate">{translate}</p>
          </div>
        )}
      </C.MainContentContainer>
      <C.SeconedContentContainer>
        <p>{data.date}</p>
        <div>
          {translateLang
            .filter((d) => data.source !== d.langSourse)
            .map((d, i) => (
              <CustomButton
                key={i}
                event={() => getTranslate(data.content, d.langSourse)}
                width="120px"
                height="40px"
                fontSize="14px"
              >
                {d.lang}
              </CustomButton>
            ))}
        </div>
      </C.SeconedContentContainer>
    </C.ContentContainer>
  );
};

export default ContentContainer;
