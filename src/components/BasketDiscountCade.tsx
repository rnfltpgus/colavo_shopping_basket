import { CartDiscount as BasketDiscountCadeType } from "../types/cart.types";

import styled from "styled-components";

type BasketDiscountCadeProps = {
  discount: BasketDiscountCadeType;
};

const BasketDiscountCade = ({
  discount,
}: BasketDiscountCadeProps): JSX.Element => {
  const { name, rate } = discount;

  return (
    <BasketDiscountCadeContainer>
      <ItemBox>
        <ItemTitle>{name}</ItemTitle>
        <ItemDescription>{rate}원</ItemDescription>
      </ItemBox>
    </BasketDiscountCadeContainer>
  );
};

export default BasketDiscountCade;

const BasketDiscountCadeContainer = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
`;

const ItemBox = styled.div``;

const ItemTitle = styled.div`
  max-width: 270px;
  color: #3d3c3e;
  font-size: 1rem;
`;

const ItemDescription = styled.div`
  color: #9fa9b2;
  font-size: 0.7rem;
`;
