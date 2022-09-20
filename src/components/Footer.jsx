import React, { useState, useContext } from 'react';
import '@styles/Footer.scss';
import { Menu } from './Menu';
import { MyOrder } from '../containers/MyOrder';
import { AppContext } from '../context/AppContext';
import close from '@icons/icon_close.png';

const Footer = ({children}) => {   

    return(
        <section className="footer-container">
        <nav className="navbar-mobile">
          {children}
            <h2>CATEGORIES</h2>
            <div className="navbar-top">
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
        
            <div className="navbar-center">
                <ul>
                  <li>
				          	<a href="/" className="title">My orders</a>
				          </li>
				          <li>
				          	<a href="/">My account</a>
				          </li>
                </ul>
            </div>
    
            <div className="navbar-bottom">
              <ul>
                <li className="navbar-mobile-email">
                  platzi@example.com
                </li>
                <li>
                  <a href="/">Sign out</a>
                </li>
              </ul>
            </div>
          </nav>
        </section>
    );
};

export { Footer };