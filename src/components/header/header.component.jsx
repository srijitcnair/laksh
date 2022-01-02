import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import logo from '../../assets/logosmall.jpg';
import './header.styles.scss';

const Header = () => (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <img src={logo} className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/sell'>
          SELL
        </Link>
      </div>
    </div>
    
);


export default Header;
