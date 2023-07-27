import CafesSelecionados from './CafesSelecionados';
import Endereco from './Endereco';
import Pagemento from './Pagamento';
import TotalItems from './CafesSelecionados/TotalItems';
import { CheckoutContainer, ParteEsquerda, PartedDireita } from './styles';

export default function Checkout() {
  return (
    <CheckoutContainer>
      <ParteEsquerda>
        <p>Complete seu pedido</p>
        <Endereco />
        <Pagemento />
      </ParteEsquerda>
      <PartedDireita>
        <p>Cafés Selecionados</p>
        <CafesSelecionados />
      </PartedDireita>
    </CheckoutContainer>
  );
}
