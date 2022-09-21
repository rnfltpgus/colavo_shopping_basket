import { Route, Routes } from "react-router-dom";

import ShoppingBasket from "../pages/ShoppingBasket";
import BeautyCutType from "../pages/BeautyCutType";
import BeautyDiscount from "../pages/BeautyDiscount";

import styled from "styled-components";

const App = () => {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<ShoppingBasket />} />
        <Route path="/item" element={<BeautyCutType />} />
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
