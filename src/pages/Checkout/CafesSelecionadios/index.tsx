import { CafeCardContainer } from '../../Home/NossosCafes/CafeCard/styles';
import CardCafeSelecionado from './CardCafeSelecionado';
import { CafesSelecionadosContainer } from './styles';

export default function CafesSeecionados() {
  return (
    <CafeCardContainer>
      <CafesSelecionadosContainer>
        <CardCafeSelecionado />
      </CafesSelecionadosContainer>
    </CafeCardContainer>
  );
}
