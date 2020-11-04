import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const SelectCartItemCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (acummulatedQuantity, cartItem) =>
        acummulatedQuantity + cartItem.quantity,
      0
    )
);
