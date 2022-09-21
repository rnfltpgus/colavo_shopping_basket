import Header from "../components/Header";
import BasketHeader from "../components/BasketHeader";
import BasketBottom from "../components/BasketBottom";
import EmptyShoppingBasket from "../components/EmptyShoppingBasket";

const ShoppingBasket = () => {
  return (
    <>
      <Header title="정세현" />
      <BasketHeader />
      <EmptyShoppingBasket />
      <BasketBottom />
    </>
  );
};

export default ShoppingBasket;
