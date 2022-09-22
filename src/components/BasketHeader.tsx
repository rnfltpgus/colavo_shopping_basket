import { StyledLink } from "./shared/StyledLink";

import { AiOutlinePlusCircle } from "react-icons/ai";
import styled from "styled-components";

const BasketHeader = (): JSX.Element => {
  return (
    <BasketHeaderContainer>
      <CutTypeButton to="/items">
        <AiOutlinePlusCircle size={15} />
        <SpanText>시술</SpanText>
      </CutTypeButton>
      <DiscountButton to="/discount">
        <AiOutlinePlusCircle size={15} />
        <SpanText>할인</SpanText>
      </DiscountButton>
    </BasketHeaderContainer>
  );
};

export default BasketHeader;

const BasketHeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  padding-bottom: 0.5rem;
`;

const SpanText = styled.span`
  margin-left: 0.5rem;
`;

const CutTypeButton = styled(StyledLink)`
  color: #969da8;
  background-color: #f7f6f7;
  font-weight: bold;
  width: 48%;
`;

const DiscountButton = styled(StyledLink)`
  color: #fdb2d2;
  background-color: #fdf1f4;
  font-weight: bold;
  width: 48%;
`;
