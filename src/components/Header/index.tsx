import { Cart, DivCartLoc, HeaderContainer, LocComponent } from './styles';
import LogoCoffe from '../../assets/Logo.svg';
import { MapPin, ShoppingCart } from 'phosphor-react';
export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoCoffe} alt="" />

      <DivCartLoc>
        <LocComponent>
          <MapPin weight="fill" />
          Brusque, SC
        </LocComponent>
        <Cart>
          <ShoppingCart weight="fill" />
        </Cart>
      </DivCartLoc>
    </HeaderContainer>
  );
}
