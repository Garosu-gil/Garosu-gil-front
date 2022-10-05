import { Button } from "@nextui-org/react";
import useStore from "../stores/storeContainer";

const Home = () => {
  const { num, setNum } = useStore();

  return <Button onClick={() => setNum(++num)}>{num}</Button>;
};

export default Home;
