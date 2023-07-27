import { EnderecoContainer, FormEndereco, TitleEndereco } from './styles';
import MapIcon from '../../../assets/mapIcon.svg';
import { useFormContext } from 'react-hook-form';

import NewEnderecoForm from './NewEnderecoForm';

export default function Endereco() {
  const { handleSubmit } = useFormContext();

  function handleCreatePayment(data: any) {
    console.log(data);
  }

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
      <FormEndereco
        onSubmit={handleSubmit(handleCreatePayment, handleCreatePayment)}
      >
        <NewEnderecoForm />
        <button type="submit">Enviar</button>
      </FormEndereco>
    </EnderecoContainer>
  );
}
