import { EnderecoContainer, FormEndereco, TitleEndereco } from './styles';
import MapIcon from '../../../assets/mapIcon.svg';
import NewEnderecoForm from './NewEnderecoForm';
import { FormProvider, useForm } from 'react-hook-form';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const newEnderecoFormSchema = zod.object({
  cep: zod.number(),
  rua: zod.string(),
  numero: zod.number(),
  complemento: zod.string(),
  bairro: zod.string(),
  cidade: zod.string(),
  uf: zod.string(),
});
type NewEnderecoFormData = zod.infer<typeof newEnderecoFormSchema>;
export default function Endereco() {
  const newEnderecoForm = useForm<NewEnderecoFormData>({
    resolver: zodResolver(newEnderecoFormSchema),
  });
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
        <FormProvider {...newEnderecoForm}>
          <NewEnderecoForm />
        </FormProvider>
      </FormEndereco>
    </EnderecoContainer>
  );
}
