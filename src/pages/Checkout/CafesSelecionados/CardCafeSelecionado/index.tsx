// CardCafeSelecionado.js
import { useContext, useState } from 'react';
import {
  AddOrRemove,
  CardContainer,
  DadosCafe,
  InputNumberCafe,
} from './styles';
import PrevIcon from '../../../../assets/PrevIcon.svg';
import NextIcon from '../../../../assets/NextIcon.svg';
import { CoffeContext } from '../../../../contexts/CoffeContext';
import { CoffeType } from '../../../../@types/coffe';

export default function CardCafeSelecionado({
  descricao,
  nome,
  preco,
  tipo,
  imagem,
  id,
}: CoffeType) {
  const baseUrl = window.location.origin;

  const { coffes, addNewCoffeContext, removeNewCoffeContext } =
    useContext(CoffeContext);

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

  return (
    <CardContainer>
      <img src={`${baseUrl}/src/assets/cafe/${imagem}`} alt="" />
      <DadosCafe>
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
        </div>
      </DadosCafe>
    </CardContainer>
  );
}
