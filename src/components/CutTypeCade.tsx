import styled from "styled-components";

type CutTypeCadeProp = {
  id: string;
  name: string;
  price: number;
};

const CutTypeCade = ({ id, name, price }: CutTypeCadeProp) => {
  return (
    <ItemContainer key={id}>
      <Item>
        <ItemTitle>{name}</ItemTitle>
        <ItemDescription>{price}원</ItemDescription>
      </Item>
      {}
    </ItemContainer>
  );
};

export default CutTypeCade;

const ItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
`;

const Item = styled.div``;

const ItemTitle = styled.div`
  max-width: 300px;
  color: #3d3c3e;
  font-size: 1rem;
`;

const ItemDescription = styled.div`
  color: #9fa9b2;
  font-size: 0.7rem;
`;
