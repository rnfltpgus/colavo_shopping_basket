import { Route, Routes } from "react-router-dom";

import ShoppingBasket from "../pages/ShoppingBasket";
import BeautyCutType from "../pages/BeautyCutType";
import BeautyDiscount from "../pages/BeautyDiscount";

import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import fetchData from "../store/FetchData";

const App = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<ShoppingBasket />} />
        <Route path="/items" element={<BeautyCutType />} />
        <Route path="/discount" element={<BeautyDiscount />} />
      </Routes>
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  width: 360px;
  height: 760px;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  padding: 1rem;
`;
