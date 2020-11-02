import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {/* performance bottleneck */}
        {/* anonymous functions keep getting called again whenever the components renders*/}
        {items
          // dont really fully understand the chaining
          .filter((item, index) => index < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}

        {/* {items
          // dont really fully understand the chaining
          .slice(0, 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))} */}
      </div>
    </div>
  );
};

export default CollectionPreview;
