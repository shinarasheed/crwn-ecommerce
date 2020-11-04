import React from 'react';
import { connect } from 'react-redux';

import CustomButtonm from '../custom-button/custom-button.component';
import { addItem } from '../../components/redux/cart/cart.actions';
import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButtonm inverted onClick={() => addItem(item)}>
        Add to Cart
      </CustomButtonm>
    </div>
  );
};

export default connect(null, { addItem })(CollectionItem);
