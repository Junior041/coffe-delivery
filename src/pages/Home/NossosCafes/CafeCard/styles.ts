import styled from 'styled-components';

export const CafeCardContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme['gray-300']};
  border-radius: 6px;
  flex-direction: column;
  max-width: 256px;
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

export const CafeNome = styled.div`
  margin-top: 8px;
  text-align: center;
  font-family: 'Baloo 2';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 26px */
  ${(props) => props.theme['gray-800']}
`;

export const DescricaoCafe = styled.span`
  font-family: 'Roboto';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 18.2px */
  color: ${(props) => props.theme['gray-600']};
  width: 216px;
  text-align: center;
  margin: 0px 20px;
`;

export const CafeBuy = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 24px;
  width: 100%;
  margin-top: 33px;
  margin-bottom: 20px;
`;

export const PrecoCoffe = styled.span`
  color: ${(props) => props.theme['gray-700']};
  font-family: 'Baloo 2';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 800;
  line-height: 130%;
  &::before {
    content: 'R$';
    font-family: 'Roboto';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`;

export const InputNumberCafe = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme['gray-400']};
  padding: 8px;
  gap: 4px;
  border-radius: 6px;
`;

export const AddOrRemove = styled.div`
  cursor: pointer;
`;
