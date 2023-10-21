import './Header.scss';

import {Bag, BagHeart} from '@styled-icons/bootstrap'
import {useEffect, useState} from 'react';

import Container from '../../base-components/Container';
import { ReactComponent as HeaderLogo } from '../../../assets/images/logo/logo_h.svg';
import MenuLink from '../../base-components/MenuLink';
import { NavLink } from 'react-router-dom';

export default function Header (props)
{
  const [full_bag, setFull_bag] = useState(false);

  useEffect(() =>
  {
    parseInt(props.cart_full) ? setFull_bag(true) : setFull_bag(false);
  })
  return(
    <header className="header">
      <div className="header__top">
        
      </div>
      <Container className='header__container'>
        <div className="header__inner">
          <NavLink className='header__main-link' to='./' title='На головну' aria-label='На головну'>
            <HeaderLogo className='header__logo'/>
          </NavLink>
          <nav className="header__menu">
            <MenuLink className='header__menu-link' to='./catalog' >Каталог</MenuLink>
            <MenuLink className='header__menu-link' to='./about' >Про нас</MenuLink>
            <MenuLink className='header__menu-link' to='./delivery' >Доставка і оплата</MenuLink>
            <MenuLink className='header__menu-link' to='./contacts' >Контакти</MenuLink>
          </nav>
          <button className='header__cart' type="button" title='Корзина' aria-label='Корзина'>
            { full_bag ? <BagHeart className='header__cart-icon'/> : <Bag className='header__cart-icon'/> }
            {full_bag?<span className='header__cart-tooltip'><span className='header__cart-tooltip-text'>{props.cart_full}</span></span>:''}
          </button>
        </div>
      </Container>
    </header>
  );
}