import { useEffect } from "react";
import { useState } from "react";
import requestApi from "../../../../libs/axios";
import useStore from "../../../../stores/storeContainer";
import CustomButton from "../../../common/CustomButton";
import * as C from "./style";

const ContentContainer = ({ data }) => {
  const [translate, setTranslate] = useState("");

  const { setShowDiction, setDictionData } = useStore();

  const translateLang = [
    { langSourse: "ko", lang: "한국어" },
    { langSourse: "zh-CN", lang: "中国话" },
    { langSourse: "ja", lang: "日本語" },
    { langSourse: "en", lang: "English" },
  ];

  const getTranslate = async (transText, langSourse) => {
    try {
      const { data } = await requestApi.get(
        `/translate?target=${langSourse}&text=${transText}`
      );
      setTranslate(data);

      setShowDiction(true);
    } catch (e) {
      console.log(e);
    }
  };

  const getDictionData = async () => {
    try {
      const {
        data: { arr },
      } = await requestApi.get(`find_dictionary?word=${translate}`);
      setDictionData(arr);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    console.log(translate);
    translate && getDictionData();
  }, [translate]);
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
                margin
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
