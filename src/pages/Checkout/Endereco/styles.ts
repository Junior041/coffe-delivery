import styled from 'styled-components';

export const EnderecoContainer = styled.div`
  background-color: ${(props) => props.theme['gray-300']};
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const TitleEndereco = styled.div`
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

export const FormEndereco = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 12px;
`;
