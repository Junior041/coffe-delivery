import styled from 'styled-components';

export const TotalItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: initial;
  padding: 8px;
  gap: 12px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme['gray-800']};
  }
  div:last-child {
    color: ${(props) => props.theme['gray-800']};
    font-family: 'Roboto';
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 26px */
  }
`;
