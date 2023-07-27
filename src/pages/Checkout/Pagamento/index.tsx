import {
  ButtonPaymant,
  MethodsPayments,
  PagamentoContainer,
  TitlePagamento,
} from './styles';
import MoneyIcon from '../../../assets/moneyIcon.svg';
import { Cardholder, Cards, Money } from 'phosphor-react';

export default function Pagemento() {
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
        <ButtonPaymant>
          <Cards color="#8047F8" />
          <span>CARTÂO DE CRÉDITO</span>
        </ButtonPaymant>
        <ButtonPaymant>
          <Cardholder color="#8047F8" />
          <span>CARTÂO DE DÉBITO</span>
        </ButtonPaymant>
        <ButtonPaymant>
          <Money color="#8047F8" />
          <span>DINHEIRO</span>
        </ButtonPaymant>
      </MethodsPayments>
    </PagamentoContainer>
  );
}
