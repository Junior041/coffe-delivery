import Endereco from './Endereco';
import { CheckoutContainer, ParteEsquerda } from './styles';

export default function Checkout() {
  return (
    <CheckoutContainer>
      <ParteEsquerda>
        <Endereco />
      </ParteEsquerda>
    </CheckoutContainer>
  );
}
