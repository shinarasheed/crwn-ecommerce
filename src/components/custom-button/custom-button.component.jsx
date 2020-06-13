import React from 'react';
import './custom-button.styles.scss';

const CustomButtonm = ({ children, ...otherProps }) => {
  return (
    <button className='custom-button' {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButtonm;
