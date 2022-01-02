import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';

import './store-item.styles.scss';

const StoreItem = ({ item }) => {
  const { name, imageUrl, quantity, price, unit } = item;

  return (
    <div className='store-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='store-footer'>
        <span className='name'>{name}</span>
        <span className='name'>{quantity} {unit} @ {price} per {unit}</span>
      </div>
      <div className='buttons'>
      <CustomButton  inverted>
        EDIT 
      </CustomButton>
      <CustomButton  inverted>
        REMOVE
      </CustomButton>
      </div>

    </div>
  );
};


export default StoreItem;
