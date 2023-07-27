import styled from 'styled-components';

export const CafeCardCheckoutContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme['gray-300']};
  flex-direction: column;
  border-radius: 6px 36px;
  width: 100%;
  justify-content: center;
  align-items: center;
  > img {
    position: relative;
    top: -20px;
    width: 120px;
    height: 120px;
  }
`;

export const CafesSelecionadosContainer = styled.div`
  padding: 40px;
  gap: 32px;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
`;
export const BotaoEnviarContainer = styled.button`
  width: 100%;
  font-family: 'Roboto';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 22.4px */
  text-transform: uppercase;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['yellow-300']};
  border: transparent;
  border-radius: 6px;
  padding: 12px 8px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['yellow-500']};
  }
`;
