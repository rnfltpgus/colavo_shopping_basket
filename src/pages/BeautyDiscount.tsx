import { useSelector } from "react-redux";

import Header from "../components/Header";
import LoadingSpinner from "../components/LoadingSpinner";
import { selectDiscounts } from "../store";

import styled from "styled-components";
import DiscountBottom from "../components/DiscountBottom";
import DiscountCade from "../components/DiscountCade";

const BeautyDiscount = (): JSX.Element => {
  const discounts = useSelector(selectDiscounts);
  const discountsArray = Object.values(discounts);

  return (
    <>
      <Header title="할인" />
      <CutTypeDiscountContainer>
        {discountsArray.length > 0 ? (
          discountsArray.map((discount) => {
            const { id, name, rate } = discount;
            return (
              <DiscountCade
                key={id}
                id={id}
                name={name}
                rate={rate}
                discount={discount}
              />
            );
          })
        ) : (
          <LoadingSpinner />
        )}
      </CutTypeDiscountContainer>
      <DiscountBottom />
    </>
  );
};

export default BeautyDiscount;

const CutTypeDiscountContainer = styled.ul`
  height: 82%;
  overflow: scroll;
`;
