// CardCafeSelecionado.js
import { useContext, useState } from 'react';
import {
  AddOrRemove,
  CardContainer,
  DadosCafe,
  InputNumberCafe,
  PriceTotal,
  RemoveAllCoffesIndex,
} from './styles';
import PrevIcon from '../../../../assets/PrevIcon.svg';
import NextIcon from '../../../../assets/NextIcon.svg';
import { CoffeContext } from '../../../../contexts/CoffeContext';
import { CoffeType } from '../../../../@types/coffe';
import { Trash } from 'phosphor-react';

export default function CardCafeSelecionado({
  descricao,
  nome,
  preco,
  tipo,
  imagem,
  id,
}: CoffeType) {
  const baseUrl = window.location.origin;
  const {
    coffes,
    addNewCoffeContext,
    removeNewCoffeContext,
    removeCoffesEqualContext,
  } = useContext(CoffeContext);

  const coffesSelectedCount = coffes.filter((coffe) => coffe.id === id);
  const [numberCoffeCard, setNumberCoffeCard] = useState(
    coffesSelectedCount.length,
  );

  const handleAddNewCoffe = () => {
    addNewCoffeContext({
      id,
      descricao,
      imagem,
      nome,
      preco,
      tipo,
      data: new Date().toISOString(),
    });
    setNumberCoffeCard((state) => state + 1);
  };

  const handleRemoveNewCoffe = () => {
    removeNewCoffeContext({
      id,
      descricao,
      imagem,
      nome,
      preco,
      tipo,
      data: new Date().toISOString(),
    });
    setNumberCoffeCard((state) => (state > 0 ? state - 1 : state));
  };

  const handleRemoveCoffesEqualContext = () => {
    removeCoffesEqualContext({
      id,
      descricao,
      imagem,
      nome,
      preco,
      tipo,
      data: new Date().toISOString(),
    });
  };

  return (
    <CardContainer>
      <img src={`${baseUrl}/src/assets/cafe/${imagem}`} width={64} alt="" />
      <DadosCafe>
        <div>
          <div>
            <span>{nome}</span>
            <div>
              <InputNumberCafe>
                <AddOrRemove>
                  <img src={PrevIcon} onClick={handleRemoveNewCoffe} alt="" />
                </AddOrRemove>
                <span>{numberCoffeCard}</span>
                <AddOrRemove>
                  <img src={NextIcon} onClick={handleAddNewCoffe} alt="" />
                </AddOrRemove>
              </InputNumberCafe>
              <RemoveAllCoffesIndex onClick={handleRemoveCoffesEqualContext}>
                <Trash color="#8047f8" />
                Remover
              </RemoveAllCoffesIndex>
            </div>
          </div>
          <PriceTotal>R${9.99}</PriceTotal>
        </div>
      </DadosCafe>
    </CardContainer>
  );
}
