import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../redux/cart/cart.actions';
import { SelectCartItemCount } from '../../components/redux/cart/cart.selectors';
import { ReactComponent as ShoppingIcon } from '../../assets/shopingbag.svg';
import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemCount: SelectCartItemCount,
});

export default connect(mapStateToProps, { toggleCartHidden })(CartIcon);
