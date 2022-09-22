import { useSelector } from "react-redux";

import Header from "../components/Header";
import { selectItems } from "../store/";

const BeautyCutType = (): JSX.Element => {
  const items = useSelector(selectItems);
  console.log("🕹 items 지금 찍히고 있다.", items);

  return (
    <>
      <Header title="시술메뉴" />
    </>
  );
};

export default BeautyCutType;
