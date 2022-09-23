import { CartItem as BasketItemCadeType } from "../types/cart.types";

import styled from "styled-components";

type BasketItemCadeProps = {
  item: BasketItemCadeType;
};

const BasketItemCade = ({ item }: BasketItemCadeProps): JSX.Element => {
  const { name, price } = item;

  return (
    <BasketItemCadeContainer>
      <ItemBox>
        <ItemTitle>{name}</ItemTitle>
        <ItemDescription>{price}원</ItemDescription>
      </ItemBox>
    </BasketItemCadeContainer>
  );
};

export default BasketItemCade;

const BasketItemCadeContainer = styled.li`
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
