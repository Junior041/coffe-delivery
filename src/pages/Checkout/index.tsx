import CafesSelecionados from './CafesSelecionados';
import Endereco from './Endereco';
import Pagemento from './Pagamento';
import { CheckoutContainer, ParteEsquerda, PartedDireita } from './styles';
import {
  FormProvider,
  useForm,
  SubmitHandler,
  DeepPartial,
} from 'react-hook-form';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext, useState } from 'react';
import { PaymentContext } from '../../contexts/PaymentContext';

const newEnderecoFormSchema = zod.object({
  cep: zod.number(),
  rua: zod.string(),
  numero: zod.number(),
  complemento: zod.string(),
  bairro: zod.string(),
  cidade: zod.string(),
  uf: zod.string(),
  methodPayment: zod.string().optional(),
});
type NewEnderecoFormData = zod.infer<typeof newEnderecoFormSchema>;
type CheckoutFormData = NewEnderecoFormData; // Pode ser igual ao NewEnderecoFormData

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('credito');
  const newEnderecoForm = useForm<NewEnderecoFormData>({
    resolver: zodResolver(newEnderecoFormSchema),
  });
  const { payment, addNewPaymentContext } = useContext(PaymentContext);

  const onSubmit: SubmitHandler<DeepPartial<CheckoutFormData>> = (data) => {
    data.methodPayment = paymentMethod;
    addNewPaymentContext(data);
    // window.location.href = '/obrigado';
  };

  return (
    <FormProvider {...newEnderecoForm}>
      <CheckoutContainer onSubmit={newEnderecoForm.handleSubmit(onSubmit)}>
        <ParteEsquerda>
          <p>Complete seu pedido</p>
          <Endereco />
          <Pagemento
            setPaymentMethod={setPaymentMethod}
            paymentMethod={paymentMethod}
          />
        </ParteEsquerda>
        <PartedDireita>
          <p>Cafés Selecionados</p>
          <CafesSelecionados />
        </PartedDireita>
      </CheckoutContainer>
    </FormProvider>
  );
}
