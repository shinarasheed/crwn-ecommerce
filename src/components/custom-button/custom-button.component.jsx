import React from 'react';
import './custom-button.styles.scss';

import { CustomButtonContainer } from './custom-button.styles';

const CustomButtonm = ({ children, ...props }) => {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
};

export default CustomButtonm;
