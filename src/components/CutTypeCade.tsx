import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../store";
import { addItem } from "../store/cartSlice";
import { Item } from "../types/colavo.types";

import { AiOutlineCheck, AiOutlineBorder } from "react-icons/ai";
import styled from "styled-components";

type CutTypeCadeProp = {
  id: string;
  name: string;
  price: number;
  item: Item;
};

const CutTypeCade = ({
  id,
  name,
  price,
  item,
}: CutTypeCadeProp): JSX.Element => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const isInCart = (itemId: string) => {
    return cartItems.find((cartItem) => cartItem.id === itemId);
  };

  return (
    <ItemContainer key={id}>
      <ItemBox>
        <ItemTitle>{name}</ItemTitle>
        <ItemDescription>{price}원</ItemDescription>
      </ItemBox>
      {isInCart(id) ? (
        <AiOutlineCheck className="check_area" />
      ) : (
        <CheckButton onClick={() => dispatch(addItem(item))}>
          <AiOutlineBorder className="check_area" />
        </CheckButton>
      )}
    </ItemContainer>
  );
};

export default CutTypeCade;

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
