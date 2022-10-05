import { Hello } from "../components";
import useStore from "../stores/storeContainer";

const Home = () => {
  const { num, setNum } = useStore();

  return <Hello />;
};

export default Home;
