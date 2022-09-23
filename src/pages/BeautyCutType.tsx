import { useSelector } from "react-redux";

import Header from "../components/Header";
import CutTypeBottom from "../components/CutTypeBottom";
import CutTypeCade from "../components/CutTypeCade";
import { selectItems } from "../store/";
import LoadingSpinner from "../components/LoadingSpinner";

import styled from "styled-components";

const BeautyCutType = (): JSX.Element => {
  const items = useSelector(selectItems);
  const itemsArray = Object.values(items);

  return (
    <>
      <Header title="시술메뉴" />
      <CutTypeCadeContainer>
        {itemsArray.length > 0 ? (
          itemsArray.map((item) => {
            const { id, name, price } = item;

            return (
              <CutTypeCade
                key={id}
                id={id}
                name={name}
                price={price}
                item={item}
              />
            );
          })
        ) : (
          <LoadingSpinner />
        )}
      </CutTypeCadeContainer>
      <CutTypeBottom />
    </>
  );
};

export default BeautyCutType;

const CutTypeCadeContainer = styled.ul`
  height: 82%;
  overflow: scroll;
`;
