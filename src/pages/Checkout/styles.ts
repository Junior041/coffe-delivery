import styled from 'styled-components';

export const CheckoutContainer = styled.form`
  width: 61vw;
  margin: auto;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ParteEsquerda = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  > p {
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 23.4px */
    margin-bottom: 15px;
  }
`;

export const PartedDireita = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  > p {
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 23.4px */
    margin-bottom: 15px;
  }
`;
