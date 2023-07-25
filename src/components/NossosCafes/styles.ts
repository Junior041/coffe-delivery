import styled from 'styled-components';

export const NossosCafesContainer = styled.div`
  width: 61vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 54px;

  h1 {
    font-family: 'Baloo 2';
    color: ${(props) => props.theme['gray-800']};
    font-weight: bold;
  }
`;

export const CafesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 32px;
`;

export const Tipo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 4px;
  div {
    background-color: ${(props) => props.theme['yellow-100']};
    color: ${(props) => props.theme['yellow-500']};
    display: flex;
    padding: 4px 8px;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 13px */
    text-transform: uppercase;
    border-radius: 6px;
  }
`;
