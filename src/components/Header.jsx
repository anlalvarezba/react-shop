import React, { useState, useContext } from 'react';
import '@styles/Header.scss';
import { Menu } from './Menu';
import { MyOrder } from '../containers/MyOrder';
import { AppContext } from '../context/AppContext';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import { Footer } from './Footer';
import close from '@icons/icon_close.png';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const [toggleMobile, setToggleMobile] = useState(false);
    const { state } = useContext(AppContext);

    const handleToggle = () => {
      setToggle(!toggle);
    }

    

    return(<nav className="navbar-desktop">
        <img src={menu} alt="menu" className="menu" onClick={()=> setToggleMobile(!toggleMobile)}/>
        
        <div className="navbar-left">
          <img src={logo} alt="logo" className="nav-logo" />
    
          <ul>
            <li>
              <a href="/">All</a>
            </li>
            <li>
              <a href="/">Clothes</a>
            </li>
            <li>
              <a href="/">Electronics</a>
            </li>
            <li>
              <a href="/">Furnitures</a>
            </li>
            <li>
              <a href="/">Toys</a>
            </li>
            <li>
              <a href="/">Others</a>
            </li>
          </ul>
        </div>
    
        <div className="navbar-right">
          <ul>
            <li className="navbar-email" onClick={handleToggle}>
              platzi@example.com
            </li>
            <li 
              className="navbar-shopping-cart"
              onClick={()=>{setToggleOrders(!toggleOrders)}}
            >
              <img src={shoppingCart} alt="shopping cart" />
              {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
            </li>
          </ul>
        </div>
        {toggle && <Menu />}
        {toggleOrders && <MyOrder setToggleOrders={setToggleOrders} />}
        {toggleMobile && (<Footer>
          <img 
            src={close} 
            alt='close' 
            className='navbar-mobile--close'
            onClick={()=>setToggleMobile(false)}
            />
        </Footer>)}
      </nav>
    );
};

export { Header };