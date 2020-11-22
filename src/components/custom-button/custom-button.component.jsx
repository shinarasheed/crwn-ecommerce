import React from 'react';
import './custom-button.styles.scss';

const CustomButtonm = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={`${inverted ? 'inverted' : ''} ${
        isGoogleSignIn ? 'google-sign-in' : ''
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButtonm;

// import React from 'react';

// import { CustomButtonContainer } from './custom-button.styles';

// const CustomButtonm = ({ children, ...props }) => {
//   return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
// };

// export default CustomButtonm;
