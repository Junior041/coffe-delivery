import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: initial;
  padding: 8px;
`;

export const DadosCafe = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: 20px;

  > div {
    display: flex;
    gap: 8px;
    > div {
      display: flex;
      flex-direction: column;
      > div {
        display: flex;
        gap: 8px;
      }
    }
  }
`;
export const InputNumberCafe = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme['gray-400']};
  padding: 8px;
  gap: 4px;
  margin-right: 8px;
  justify-content: center;
  border-radius: 6px;
`;
export const AddOrRemove = styled.div`
  cursor: pointer;
`;
export const RemoveAllCoffesIndex = styled.div`
  display: flex;
  background-color: ${(props) => props.theme['gray-400']};
  padding: 8px;
  border-radius: 6px;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  cursor: pointer;
`;

export const PriceTotal = styled.div`
  color: ${(props) => props.theme['gray-700']};
  font-family: 'Baloo 2';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 800;
  line-height: 130%;
`;
