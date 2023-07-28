import { useContext } from 'react';
import { PaymentContext } from '../../contexts/PaymentContext';
import {
  ConteudoObrigado,
  DadosPagamento,
  DivDado,
  ObrigadoContainer,
  TituloObrigado,
} from './styles';
import imgMap from '../../assets/mapPayment.svg';
import imgTime from '../../assets/timePayment.svg';
import imgMoney from '../../assets/moneyPayment.svg';
import { PaymentsType } from '../../@types/payments';

export default function Obrigado() {
  const { payment } = useContext(PaymentContext);
  console.log(payment);

  return (
    <ObrigadoContainer>
      <TituloObrigado>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </TituloObrigado>
      <ConteudoObrigado>
        <DadosPagamento>
          <DivDado>
            <img src={imgMap} alt="" />
            <div>
              <span>
                Entrega em{' '}
                <b>
                  {payment?.rua}, {payment?.numero}
                </b>
                <br />
                {payment?.bairro}, {payment?.cidade} - {payment?.uf}
              </span>
            </div>
          </DivDado>
          <DivDado>
            <img src={imgTime} alt="" />
            <div>
              <span>Previsão de entrega:</span>
              <span>
                <b>20 m</b>
              </span>
            </div>
          </DivDado>
          <DivDado>
            <img src={imgMoney} alt="" />
            <div>
              <span></span>
              <span></span>
            </div>
          </DivDado>
          <DivDado>
            <img src="" alt="" />
            <div>
              <span></span>
              <span></span>
            </div>
          </DivDado>
        </DadosPagamento>
      </ConteudoObrigado>
    </ObrigadoContainer>
  );
}
