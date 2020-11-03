import React from 'react';
import './signin-and-signup.scss';
import Signin from '../../components/signin/sign.component';
import Signup from '../../components/sign-up/sign-up.component';

const SignInAndSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <Signin />
      <Signup />
    </div>
  );
};

export default SignInAndSignUpPage;
