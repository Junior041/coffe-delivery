import { useFormContext } from 'react-hook-form';
import {
  BairroInput,
  CepInput,
  CidadeInput,
  ComplementoInput,
  NumeroInput,
  RuaInput,
  UfInput,
} from './styles';

export default function NewEnderecoForm() {
  const { register } = useFormContext();
  return (
    <>
      <CepInput {...register('cep')} id="cep" placeholder="CEP" />
      <RuaInput {...register('rua')} id="rua" placeholder="Rua" />
      <NumeroInput
        {...register('numero', { valueAsNumber: true })}
        id="numero"
        placeholder="Numero"
      />
      <ComplementoInput
        {...register('complemento')}
        id="complemento"
        placeholder="Complemento"
      />
      <BairroInput {...register('bairro')} id="bairro" placeholder="Bairro" />
      <CidadeInput {...register('cidade')} id="cidade" placeholder="Cidade" />
      <UfInput {...register('uf')} id="uf" placeholder="UF" />
    </>
  );
}
