import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../components/Header";
import BasketHeader from "../components/BasketHeader";
import BasketBottom from "../components/BasketBottom";
import EmptyShoppingBasket from "../components/EmptyShoppingBasket";
import { updateTotalPrice } from "../store/cartSlice";
import { selectCart } from "../store";
import BasketCade from "../components/BasketItmeCade";

import styled from "styled-components";
import BasketDiscountCade from "../components/BasketDiscountCade";

const ShoppingBasket = (): JSX.Element => {
  const { items, totalPrice, discounts } = useSelector(selectCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTotalPrice());
  }, [items, discounts, dispatch]);

  return (
    <>
      <Header title="정세현" />
      <ShoppingBasketContainer>
        <BasketHeader />
        {items.length > 0 ? (
          items.map((item) => <BasketCade key={item.id} item={item} />)
        ) : (
          <EmptyShoppingBasket />
        )}
        {discounts.length > 0 &&
          discounts.map((discount) => (
            <BasketDiscountCade key={discount.id} discount={discount} />
          ))}
      </ShoppingBasketContainer>
      <BasketBottom totalPrice={totalPrice} />
    </>
  );
};

export default ShoppingBasket;

const ShoppingBasketContainer = styled.div`
  height: 80%;
  overflow: scroll;
`;
