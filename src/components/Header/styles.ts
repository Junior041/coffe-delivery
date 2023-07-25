import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 61vw;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

export const DivCartLoc = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
`;

export const LocComponent = styled.div`
  display: flex;
  align-items: center;

  background-color: ${(props) => props.theme['purple-100']};
  color: ${(props) => props.theme['purple-700']};
  padding: 0.5rem;
  border-radius: 6px;
`;

export const Cart = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['yellow-100']};
  color: ${(props) => props.theme['yellow-500']};
`;
