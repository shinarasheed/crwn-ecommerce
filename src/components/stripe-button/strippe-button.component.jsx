import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const onToken = (token) => {
    console.log(token);
    alert('payment successful');
  };
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HncPtCk8BZejRa7WTeuw97ycVSLZY5B5FR6lveWACcRvmQZ0lKSV2XRAWURK78I1C9DuU7tI1qFXxwzg1iP3FAi00ADupm8gz';
  return (
    <StripeCheckout
      label="Pay Now"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
