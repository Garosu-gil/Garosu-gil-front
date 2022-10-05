import css from "styled-jsx/css";
import { Hello } from "../components";
import useStore from "../stores/storeContainer";

const Home = () => {
  const { num, setNum } = useStore();

  return (
    <Hello
      css={css`
        background-color: purple;
      `}
    />
  );
};

export default Home;
