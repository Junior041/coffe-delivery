import { TotalItemsContainer } from './styles';

export default function TotalItems() {
  return (
    <TotalItemsContainer>
      <div>
        <span>Total de itens</span>
        <span>R$ 29,70</span>
      </div>
      <div>
        <span>Entrega</span>
        <span>R$ 3,50</span>
      </div>
      <div>
        <span>Total</span>
        <span>R$ 33,20</span>
      </div>
    </TotalItemsContainer>
  );
}
