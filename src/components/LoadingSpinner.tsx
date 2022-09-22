import styled from "styled-components";

const LoadingSpinner = () => {
  return (
    <LoadingSpinnerContainer>
      <img src={"/img/LoadingSpinner.gif"} alt="loading" />
    </LoadingSpinnerContainer>
  );
};

export default LoadingSpinner;

const LoadingSpinnerContainer = styled.div`
  height: 82.7%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 150px;
    height: 150px;
  }
`;
