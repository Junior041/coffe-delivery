import styled from 'styled-components';

export const ObrigadoContainer = styled.div`
  width: 61vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
`;
export const TituloObrigado = styled.div`
  display: flex;
  align-items: initial;
  flex-direction: column;
  > h1 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme['yellow-500']};
  }

  > p {
    color: ${(props) => props.theme['gray-800']};
    font-family: Roboto;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 26px */
  }
`;

export const ConteudoObrigado = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const DadosPagamento = styled.div`
  display: flex;
  align-items: initial;
  gap: 32px;
  padding: 40px;
  flex-direction: column;
`;

export const DivDado = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  div {
    display: flex;
    flex-direction: column;
  }
`;
