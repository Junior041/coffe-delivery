import {
  EnderecoContainer,
  FormEndereco,
  TitleEndereco,
  BairroInput,
  CepInput,
  CidadeInput,
  ComplementoInput,
  NumeroInput,
  RuaInput,
  UfInput,
} from './styles';
import MapIcon from '../../../assets/mapIcon.svg';

import { useFormContext } from 'react-hook-form';

export default function Endereco() {
  const { register } = useFormContext();

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
        <>
          <CepInput
            {...register('cep', { required: true, valueAsNumber: true })}
            id="cep"
            placeholder="CEP"
            type="number"
          />
          <RuaInput
            {...register('rua', { required: true })}
            id="rua"
            placeholder="Rua"
          />
          <NumeroInput
            {...register('numero', { required: true, valueAsNumber: true })}
            id="numero"
            placeholder="Numero"
            type="number"
          />
          <ComplementoInput
            {...register('complemento', { required: true })}
            id="complemento"
            placeholder="Complemento"
          />
          <BairroInput
            {...register('bairro', { required: true })}
            id="bairro"
            placeholder="Bairro"
          />
          <CidadeInput
            {...register('cidade', { required: true })}
            id="cidade"
            placeholder="Cidade"
          />
          <UfInput
            {...register('uf', { required: true })}
            id="uf"
            placeholder="UF"
          />
        </>
      </FormEndereco>
    </EnderecoContainer>
  );
}
