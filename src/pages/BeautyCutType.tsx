import { useSelector } from "react-redux";

import Header from "../components/Header";
import CutTypeBottom from "../components/CutTypeBottom";
import CutTypeCade from "../components/CutTypeCade";
import { selectItems } from "../store/";
import LoadingSpinner from "../components/LoadingSpinner";

const BeautyCutType = (): JSX.Element => {
  const items = useSelector(selectItems);
  const itemsArray = Object.values(items);
  console.log("🕹 itemsArray 지금 찍히고 있다.", itemsArray);

  return (
    <>
      <Header title="시술메뉴" />
      <CutTypeCade />
      {itemsArray.map((item) => (
        <div key={item.id}>
          <div>
            <div>{item.name}</div>
            <div>
              {item.price}
            </div>
          </div>
        </div>
      ))}
      {/* <LoadingSpinner/> */}
      <CutTypeBottom />
    </>
  );
};

export default BeautyCutType;
