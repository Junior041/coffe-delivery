import {
  AddOrRemove,
  CafeBuy,
  CafeCardContainer,
  CafeNome,
  DescricaoCafe,
  InputNumberCafe,
  PrecoCoffe,
} from './styles';
import { CoffeType } from '../../../@types/coffe';
import { Tipo } from '../styles';
import ButtonCartHome from '../../../assets/ButtonCartHome.svg';
import PrevIcon from '../../../assets/PrevIcon.svg';
import NextIcon from '../../../assets/NextIcon.svg';
import { useContext } from 'react';
import { CoffeContext } from '../../../contexts/CoffeContext';

export default function CafeCard({
  descricao,
  nome,
  preco,
  tipo,
  imagem,
  id,
}: CoffeType) {
  const baseUrl = window.location.origin;

  const { addNewCoffeContext } = useContext(CoffeContext);

  const handleAddNewCoffe = () => {
    addNewCoffeContext({ id, descricao, imagem, nome, preco, tipo });
  };

  return (
    <CafeCardContainer>
      <img src={`${baseUrl}/src/assets/cafe/${imagem}`} alt="" />
      <Tipo>
        {tipo.map((uniqueTipo: string) => {
          return <div key={uniqueTipo}>{uniqueTipo}</div>;
        })}
      </Tipo>
      <CafeNome>{nome}</CafeNome>
      <DescricaoCafe>{descricao}</DescricaoCafe>
      <CafeBuy>
        <div>
          <PrecoCoffe>{preco}</PrecoCoffe>
        </div>
        <div>
          <InputNumberCafe>
            <AddOrRemove>
              <img src={PrevIcon} alt="" />
            </AddOrRemove>
            <span>{0}</span>
            <AddOrRemove>
              <img src={NextIcon} onClick={handleAddNewCoffe} alt="" />
            </AddOrRemove>
          </InputNumberCafe>
        </div>
        <div>
          <img src={ButtonCartHome} width={38} alt="" />
        </div>
      </CafeBuy>
    </CafeCardContainer>
  );
}
