import { Global, css } from "@emotion/react";
import emotionReset from "emotion-reset";

export default function GlobalStyle() {
  return (
    <Global
      styles={css`
        ${emotionReset}

        body {
          padding: 0;
          margin: 0;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        * {
          box-sizing: border-box;
        }
      `}
    ></Global>
  );
}
