import { useDispatch, useSelector } from "react-redux";

import { selectCartDiscounts } from "../store";
import { addDiscount } from "../store/cartSlice";
import { Discount } from "../types/colavo.types";

import { AiOutlineCheck, AiOutlineBorder } from "react-icons/ai";
import styled from "styled-components";

type DiscountCadeProp = {
  id: string;
  name: string;
  rate: number;
  discount: Discount;
};

const DiscountCade = ({
  id,
  name,
  rate,
  discount,
}: DiscountCadeProp): JSX.Element => {
  const dispatch = useDispatch();
  const cartDiscounts = useSelector(selectCartDiscounts);

  const isInCart = (discountId: string) => {
    return cartDiscounts.find((cartDiscount) => cartDiscount.id === discountId);
  };

  return (
    <ItemContainer key={id}>
      <ItemBox>
        <ItemTitle>{name}</ItemTitle>
        <ItemDescription>{rate}%</ItemDescription>
      </ItemBox>
      {isInCart(id) ? (
        <AiOutlineCheck className="check_area" />
      ) : (
        <CheckButton onClick={() => dispatch(addDiscount(discount))}>
          <AiOutlineBorder className="check_area" />
        </CheckButton>
      )}
    </ItemContainer>
  );
};

export default DiscountCade;

const ItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;

  .check_area {
    height: 100%;
    background-color: #ffffff;
    border: none;
  }
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

const CheckButton = styled.button`
  border: none;
`;
