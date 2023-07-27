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
`;
export const InputNumberCafe = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme['gray-400']};
  padding: 8px;
  gap: 4px;
  border-radius: 6px;
`;
export const AddOrRemove = styled.div`
  cursor: pointer;
`;
