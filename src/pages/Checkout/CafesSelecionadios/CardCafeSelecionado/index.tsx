import { CardContainer } from './styles';
import imgProvisoria from '../../../../assets/cafe/Coffee-13.svg';
export default function CardCafeSelecionado() {
  return (
    <CardContainer>
      <img src={imgProvisoria} width={64} alt="" />
    </CardContainer>
  );
}
