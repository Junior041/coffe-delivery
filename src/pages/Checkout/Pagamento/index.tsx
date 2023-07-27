import {
  ButtonPaymant,
  MethodsPayments,
  PagamentoContainer,
  TitlePagamento,
} from './styles';
import MoneyIcon from '../../../assets/moneyIcon.svg';
import { Cardholder, Cards, Money } from 'phosphor-react';
import { useState } from 'react';

export default function Pagemento({
  setPaymentMethod,
  paymentMethod,
}: {
  setPaymentMethod: (method: string) => void;
  paymentMethod: string;
}) {
  function handlePaymentMethod(method: string) {
    setPaymentMethod(method);
  }
  return (
    <PagamentoContainer>
      <TitlePagamento>
        <img src={MoneyIcon} width={22} alt="" />
        <div>
          <p>Pagamento</p>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </div>
      </TitlePagamento>
      <MethodsPayments>
        <ButtonPaymant
          id="credito"
          className={paymentMethod === 'credito' ? 'ativo' : ''}
          onClick={() => handlePaymentMethod('credito')}
        >
          <Cards color="#8047F8" />
          <span>CARTÂO DE CRÉDITO</span>
        </ButtonPaymant>
        <ButtonPaymant
          id="debito"
          className={paymentMethod === 'debito' ? 'ativo' : ''}
          onClick={() => handlePaymentMethod('debito')}
        >
          <Cardholder color="#8047F8" />
          <span>CARTÂO DE DÉBITO</span>
        </ButtonPaymant>
        <ButtonPaymant
          id="dinheiro"
          className={paymentMethod === 'dinheiro' ? 'ativo' : ''}
          onClick={() => handlePaymentMethod('dinheiro')}
        >
          <Money color="#8047F8" />
          <span>DINHEIRO</span>
        </ButtonPaymant>
      </MethodsPayments>
    </PagamentoContainer>
  );
}
