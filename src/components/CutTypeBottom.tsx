// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";

// import { selectCartItems } from "../store";
import { StyledLink } from "./shared/StyledLink";

import styled from "styled-components";

const CutTypeBottom = (): JSX.Element => {
  // const cartItems = useSelector(selectCartItems);
  // const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // useEffect(() => {
  //   if (cartItems.length < 3) {
  //     setIsButtonDisabled(true);
  //   } else {
  //     setIsButtonDisabled(false);
  //   }
  // }, [cartItems]);

  return (
    <CutTypeBottomContainer>
      <SpanText>서비스를 선택하세요(여러 개 선택가능)</SpanText>
      <CompletionButton
        to="/"
        // disabled={isButtonDisabled}
      >
        완료
      </CompletionButton>
    </CutTypeBottomContainer>
  );
};

export default CutTypeBottom;

const CutTypeBottomContainer = styled.footer`
  border-top: 1px solid #dddddd;
  text-align: center;
`;

const SpanText = styled.span`
  display: inline-block;
  margin-top: 8px;
  font-size: small;
`;

const CompletionButton = styled(StyledLink)`
  margin-top: 0.5rem;
  background-color: #ae9cf1;
  width: 100%;
  color: white;

  &:hover {
    background-color: #8367f3;
  }
`;
