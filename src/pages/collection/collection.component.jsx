import React from 'react';
import { connect } from 'react-redux';

// import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../components/redux/shop/shop.selector';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
  console.log(collection);
  return <div className="collection-page">Collection page</div>;
};

//the second optional parameter in mapStateToProps is ownProps
//it is the props of the component
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
