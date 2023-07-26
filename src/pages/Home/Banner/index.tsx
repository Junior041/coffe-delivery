import {
  BannerBackground,
  BannerContainer,
  BannerDescriptions,
  BannerDescriptionsInformations,
} from './styles';
import BackgroundBanner from '../../../assets/BackgroundBanner.svg';
import ShoppingCart from '../../../assets/shoppingCart.svg';
import Timer from '../../../assets/timer.svg';
import Embalagem from '../../../assets/embalagem.svg';
import Coffe from '../../../assets/coffe.svg';
import CoffeBanner from '../../../assets/coffeBanner.png';

export default function Banner() {
  return (
    <>
      <BannerBackground bgimage={BackgroundBanner} />
      <BannerContainer>
        <BannerDescriptions>
          <h2>Encontre o café perfeito para qualquer hora do dia</h2>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
          <BannerDescriptionsInformations>
            <div>
              <img src={ShoppingCart} alt="" />
              Compra simples e segura
            </div>
            <div>
              <img src={Embalagem} alt="" />
              Embalagem mantém o café intacto
            </div>
            <div>
              <img src={Timer} alt="" />
              Entrega rápida e rastreada
            </div>
            <div>
              <img src={Coffe} alt="" />O café chega fresquinho até você
            </div>
          </BannerDescriptionsInformations>
        </BannerDescriptions>
        <div>
          <img src={CoffeBanner} alt="" />
        </div>
      </BannerContainer>
    </>
  );
}
