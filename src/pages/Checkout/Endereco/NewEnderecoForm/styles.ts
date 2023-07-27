import styled from 'styled-components';
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
  width: 31.43%;
`;

export const RuaInput = styled(BaseInput)`
  width: 100%;
`;

export const NumeroInput = styled(BaseInput)`
  width: 31.43%;
`;

export const ComplementoInput = styled(BaseInput)`
  width: 66.37%;
  display: flex;
  justify-content: space-between;
`;

export const BairroInput = styled(BaseInput)`
  width: 31.43%;
`;

export const CidadeInput = styled(BaseInput)`
  width: 48.3%;
`;

export const UfInput = styled(BaseInput)`
  width: 16%;
`;
