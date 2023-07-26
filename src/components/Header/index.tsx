import { Cart, DivCartLoc, HeaderContainer, LocComponent } from './styles';
import LogoCoffe from '../../assets/Logo.svg';
import { MapPin, ShoppingCart } from 'phosphor-react';
import { useContext } from 'react';
import { CoffeContext } from '../../contexts/CoffeContext';
export function Header() {
  const { numberCoffe } = useContext(CoffeContext);
  return (
    <HeaderContainer>
      <img src={LogoCoffe} alt="" />

      <DivCartLoc>
        <LocComponent>
          <MapPin weight="fill" />
          Brusque, SC
        </LocComponent>
        <Cart>
          <span>{numberCoffe}</span>
          <ShoppingCart weight="fill" />
        </Cart>
      </DivCartLoc>
    </HeaderContainer>
  );
}
