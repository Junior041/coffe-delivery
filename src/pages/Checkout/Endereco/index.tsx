import {
  CepInput,
  ComplementoInput,
  EnderecoContainer,
  FormEndereco,
  NumeroInput,
  RuaInput,
  TitleEndereco,
} from './styles';
import MapIcon from '../../../assets/mapIcon.svg';

export default function Endereco() {
  return (
    <EnderecoContainer>
      <div>
        <TitleEndereco>
          <img src={MapIcon} width={22} alt="" />
          <div>
            <p>Endereço de entrega</p>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </TitleEndereco>
      </div>
      <FormEndereco>
        <CepInput type="text" placeholder="CEP" />
        <RuaInput type="text" placeholder="Rua" />
        <NumeroInput type="text" placeholder="Numero" />
        <ComplementoInput type="text" placeholder="Numero" />
      </FormEndereco>
    </EnderecoContainer>
  );
}
