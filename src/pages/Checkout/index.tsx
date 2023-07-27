import CafesSelecionados from './CafesSelecionados';
import Endereco from './Endereco';
import Pagemento from './Pagamento';
import { CheckoutContainer, ParteEsquerda, PartedDireita } from './styles';
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

export default function Checkout() {
  const newEnderecoForm = useForm<NewEnderecoFormData>({
    resolver: zodResolver(newEnderecoFormSchema),
  });
  return (
    <FormProvider {...newEnderecoForm}>
      <CheckoutContainer>
        <ParteEsquerda>
          <p>Complete seu pedido</p>
          <Endereco />
          <Pagemento />
        </ParteEsquerda>
        <PartedDireita>
          <p>Cafés Selecionados</p>
          <CafesSelecionados />
        </PartedDireita>
      </CheckoutContainer>
    </FormProvider>
  );
}
