import Banner from './Banner';
import NossosCafes from './NossosCafes';
import { HomeContainer } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <Banner />
      <NossosCafes />
    </HomeContainer>
  );
}
