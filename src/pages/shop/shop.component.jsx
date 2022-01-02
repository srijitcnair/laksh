import React from 'react';


import './shop.styles.scss';

import FormInput from '../../components/form-input/form-input.component'

const ShopPage = () => (
  <div className='shop-page'>
    <span>Looking for top quality local produce?</span>

    <div className='search'>
        <form>
            <FormInput
                    name='search'
                    type='search'
                    value=''
                    label='Search'
                />

        </form>
    </div>
  </div>

);

export default ShopPage;