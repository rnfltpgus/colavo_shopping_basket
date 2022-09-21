import { AiOutlineShopping } from "react-icons/ai";
import styled from "styled-components";

const EmptyShoppingBasket = () => {
  return (
    <EmptyShoppingBasketContainer>
      <AiOutlineShopping size={100} />
      <br />빈 장바구니 입니다.
    </EmptyShoppingBasketContainer>
  );
};

export default EmptyShoppingBasket;

export const EmptyShoppingBasketContainer = styled.div`
  height: 72%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #cdcdcd;
`;
