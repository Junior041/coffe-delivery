import { useContext } from 'react';
import CardCafeSelecionado from '../CardCafeSelecionado';
import {
  CafesSelecionadosContainer,
  CafeCardCheckoutContainer,
  BotaoEnviarContainer,
} from './styles';
import { CoffeContext } from '../../../contexts/CoffeContext';
import { CoffeType } from '../../../@types/coffe';
import TotalItems from '../TotalItems';

export default function CafesSelecionados() {
  const { coffes } = useContext(CoffeContext);
  const uniqueArray = coffes.reduce(
    (acc: CoffeType[], currentItem: CoffeType) => {
      const existingItem = acc.find((item) => item.id === currentItem.id);
      if (!existingItem) {
        acc.push(currentItem);
      }
      return acc;
    },
    [],
  );

  return (
    <CafeCardCheckoutContainer>
      <CafesSelecionadosContainer>
        {uniqueArray.map((coffe) => {
          return (
            <CardCafeSelecionado
              descricao={coffe.descricao}
              imagem={coffe.imagem}
              nome={coffe.nome}
              tipo={coffe.tipo}
              preco={coffe.preco}
              id={coffe.id}
              data={coffe.data}
              key={coffe.id}
            />
          );
        })}
        <TotalItems />
        <BotaoEnviarContainer>CONFIRMAR PEDIDO</BotaoEnviarContainer>
      </CafesSelecionadosContainer>
    </CafeCardCheckoutContainer>
  );
}
