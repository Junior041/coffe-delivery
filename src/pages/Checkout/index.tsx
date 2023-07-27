import Endereco from './Endereco';
import Pagemento from './Pagamento';
import { CheckoutContainer, ParteEsquerda } from './styles';

export default function Checkout() {
  return (
    <CheckoutContainer>
      <ParteEsquerda>
        <p>Complete seu pedido</p>
        <Endereco />
        <Pagemento />
      </ParteEsquerda>
    </CheckoutContainer>
  );
}
