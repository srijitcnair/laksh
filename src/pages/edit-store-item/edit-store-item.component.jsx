import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component';

import {getStoreItem} from '../../redux/user/user.selectors'
import {addItemToStore} from '../../redux/user/user.actions'

import './edit-store-item.styles.scss'

const EditStoreItemPage = ( {storeItem} ) => (
  <div className='edit-item-page'>
    <div className='title'>
      <span >Edit Store Item</span>
    </div>
    <div className='search'>
        <form>
            <div
                className='image'
                style={{
                backgroundImage: `url(${storeItem.imageUrl})`
                }}
            />
            <span > { storeItem.name} </span>
            <FormInput name='quantity'
                type='text'
                value= {storeItem.quantity}
                label= {'Quantity (' + storeItem.quantityUnit + ')'}
                
            />

            <FormInput name='price'
                type='text'
                value= {storeItem.price}
                label={'Price (' + storeItem.priceUnit + ')'}
                readOnly
            />


        </form>
    </div>
    <div className='more-buttons'>
      <CustomButton  inverted>
        SAVE 
      </CustomButton>
      <CustomButton  >
        CANCEL
      </CustomButton>
      </div>
  </div>

);

const mapStateToProps = (state, ownProps) => ({
  storeItem: getStoreItem(ownProps.match.params.itemId)(state)
});

const mapDispatchToProps = dispatch => ({
  saveItem: item => dispatch(addItemToStore(item))
});

export default connect(mapStateToProps)(EditStoreItemPage);