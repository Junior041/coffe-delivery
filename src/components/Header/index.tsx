import { Cart, DivCartLoc, HeaderContainer, LocComponent } from './styles';
import LogoCoffe from '../../assets/Logo.svg';
import { MapPin, ShoppingCart } from 'phosphor-react';
import { useContext } from 'react';
import { CoffeContext } from '../../contexts/CoffeContext';
import { NavLink } from 'react-router-dom';
export function Header() {
  const { numberCoffe } = useContext(CoffeContext);
  return (
    <HeaderContainer>
      <NavLink to={'/'}>
        <img src={LogoCoffe} alt="" />
      </NavLink>

      <DivCartLoc>
        <LocComponent>
          <MapPin weight="fill" />
          Brusque, SC
        </LocComponent>
        <NavLink to={'/checkout'}>
          <Cart>
            <span>{numberCoffe}</span>
            <ShoppingCart weight="fill" />
          </Cart>
        </NavLink>
      </DivCartLoc>
    </HeaderContainer>
  );
}
