import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../../components/custom-button/custom-button.component';
import StoreItem from '../../components/store-item/store-item.component';

import { getCurrentStore  } from '../../redux/user/user.selectors';

import './sell.styles.scss'


const SellPage = ({ items }) => {
    console.log('Here')
    return (
    <div className='collection-page'>
        <h1 className='title'>MY STORE FRONT</h1>
        <div className='items' >
        {items        
            .map(item => (
            <StoreItem key={item.id} item={item} />
            ))}
        </div>
        
        <div className='more-buttons'>
            <CustomButton > ADD MORE ITEMS</CustomButton>
        </div>
    </div>
    )
};

const mapStateToProps = createStructuredSelector({
    items: getCurrentStore
});
  
export default withRouter(connect(mapStateToProps)(SellPage));
  