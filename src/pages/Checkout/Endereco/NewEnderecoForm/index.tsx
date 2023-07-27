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
      <CepInput
        {...register('cep', { valueAsNumber: true })}
        id="cep"
        placeholder="CEP"
        required
      />
      <RuaInput {...register('rua')} id="rua" placeholder="Rua" required />
      <NumeroInput
        {...register('numero', { valueAsNumber: true })}
        id="numero"
        placeholder="Numero"
        required
      />
      <ComplementoInput
        {...register('complemento')}
        id="complemento"
        placeholder="Complemento"
        required
      />
      <BairroInput
        {...register('bairro')}
        id="bairro"
        placeholder="Bairro"
        required
      />
      <CidadeInput
        {...register('cidade')}
        id="cidade"
        placeholder="Cidade"
        required
      />
      <UfInput {...register('uf')} id="uf" placeholder="UF" required />
    </>
  );
}
