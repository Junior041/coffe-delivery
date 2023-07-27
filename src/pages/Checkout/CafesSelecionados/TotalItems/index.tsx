import { useContext } from 'react';
import { TotalItemsContainer } from './styles';
import { CoffeContext } from '../../../../contexts/CoffeContext';

export default function TotalItems() {
  const { coffes } = useContext(CoffeContext);

  let precoItems = 0;
  const precoEntrega = '4';
  coffes.map((coffe) => {
    precoItems = precoItems + Number(coffe.preco);
    return true;
  });

  return (
    <TotalItemsContainer>
      <div>
        <span>Total de itens</span>
        <span>R$ {precoItems.toFixed(2)}</span>
      </div>
      <div>
        <span>Entrega</span>
        <span>R$ {Number(precoEntrega).toFixed(2)}</span>
      </div>
      <div>
        <span>Total</span>
        <span>R$ {(Number(precoEntrega) + precoItems).toFixed(2)}</span>
      </div>
    </TotalItemsContainer>
  );
}
