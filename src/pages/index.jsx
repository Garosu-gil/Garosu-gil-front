import { Header } from "../components";
import useStore from "../stores/storeContainer";

const Home = () => {
  const { num, setNum } = useStore();

  return <Header />;
};

export default Home;
