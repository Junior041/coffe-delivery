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
