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

const BaseInput = styled.input`
  background-color: ${(props) => props.theme['gray-400']};
  height: 42px;
  padding: 12px;
  font-size: 14px;
  color: ${(props) => props.theme['gray-600']};
  border: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 4px;
`;

export const CepInput = styled(BaseInput)`
  width: 200px;
`;

export const RuaInput = styled(BaseInput)`
  width: 100%;
`;

export const NumeroInput = styled(BaseInput)`
  width: 200px;
`;

export const ComplementoInput = styled(BaseInput)`
  width: 348px;
  display: flex;
  justify-content: space-between;
`;
