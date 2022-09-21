import { StyledLink } from "./shared/StyledLink";

import styled from "styled-components";

const BasketBottom = () => {
  return (
    <>
      <TotalPriceContainer>
        합계
        <TotalPrice>0 원</TotalPrice>
      </TotalPriceContainer>
      <NextButton to="/">다음</NextButton>
    </>
  );
};

export default BasketBottom;

const TotalPriceContainer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid #dddddd;
`;

const TotalPrice = styled.div`
  font-size: 1.7rem;
`;

const NextButton = styled(StyledLink)`
  background-color: #9a84f1;
  width: 100%;
  color: white;

  &:hover {
    background-color: #8367f3;
  }
`;
