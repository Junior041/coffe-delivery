import styled from 'styled-components';

export const PagamentoContainer = styled.div`
  background-color: ${(props) => props.theme['gray-300']};
  padding: 40px;
  gap: 32px;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
`;

export const TitlePagamento = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 8px;
  > div {
    display: flex;
    flex-direction: column;
    line-height: 130%; /* 20.8px */
    > h3 {
      font-size: 1rem;
    }
    > span {
      font-size: 0.875rem;
    }
  }
`;

export const MethodsPayments = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonPaymant = styled.div`
  background-color: ${(props) => props.theme['gray-400']};
  padding: 16px;
  display: flex;
  align-items: initial;
  gap: 12px;
  border-radius: 6px;
  width: 32%;
  gap: 12px;
  > span {
    font-family: 'Roboto', 'sans-serif';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 19.2px */
    text-transform: uppercase;
  }
`;
