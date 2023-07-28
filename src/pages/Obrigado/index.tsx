import { useContext } from 'react';
import { PaymentContext } from '../../contexts/PaymentContext';

export default function Obrigado() {
  const { payment } = useContext(PaymentContext);
  console.log(payment);
  return (
    <div>
      <pre></pre>
    </div>
  );
}
