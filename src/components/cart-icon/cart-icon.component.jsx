import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopingbag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../redux/cart/cart.actions';
import { SelectCartItemCount } from '../../components/redux/cart/cart.selectors';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = (state) => ({
  itemCount: SelectCartItemCount(state),
});

export default connect(mapStateToProps, { toggleCartHidden })(CartIcon);
