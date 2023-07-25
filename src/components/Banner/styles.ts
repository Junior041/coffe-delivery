import { styled } from 'styled-components';

interface BannerContainerProps {
  bgimage: string;
}

export const BannerBackground = styled.div<BannerContainerProps>`
  background-image: url(${(props) => props.bgimage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 540px;
  position: absolute;
  left: 0;
  filter: blur(80px);
  z-index: -1;
`;

export const BannerContainer = styled.div`
  width: 61vw;
  margin: auto;
  display: flex;
  padding: 5.75rem 0;
  position: relative;
  justify-content: space-between;
  align-items: center;
`;

export const BannerDescriptions = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  max-width: 768px;
  h2 {
    color: ${(props) => props.theme['gray-900']};
    font-weight: bold;
    font-family: 'Baloo 2', cursive;
    line-height: 3.9rem;
    font-size: 3rem;
  }
  span {
    font-size: 1.25rem;
  }
`;

export const BannerDescriptionsInformations = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-row-gap: 31px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  margin-top: 66px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 11px;
    font-size: 1rem;
    line-height: 20.8px;
    flex: 1;
  }
`;
