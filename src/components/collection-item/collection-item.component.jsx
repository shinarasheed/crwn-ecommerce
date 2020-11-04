import React from 'react';
import CustomButtonm from '../custom-button/custom-button.component';
import './collection-item.styles.scss';

const CollectionItem = ({ name, price, imageUrl }) => {
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButtonm inverted>Add to Cart</CustomButtonm>
    </div>
  );
};

export default CollectionItem;
