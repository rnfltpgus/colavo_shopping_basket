import { StyledLink } from "./shared/StyledLink";

import styled from "styled-components";

const CutTypeBottom = () => {
  return (
    <CutTypeBottomContainer>
      <SpanText>서비스를 선택하세요(여러 개 선택가능)</SpanText>
      <CompletionButton to="/">완료</CompletionButton>
    </CutTypeBottomContainer>
  );
};

export default CutTypeBottom;

const CutTypeBottomContainer = styled.footer`
  text-align: center;
`;

const SpanText = styled.span`
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
