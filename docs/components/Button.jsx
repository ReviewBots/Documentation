import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'tigerspack';

const ButtonComponent = ({ children, ...props }) => (
    <div style={{padding: '5px', display: 'inline-block'}}>
      <Button {...props}>{children}</Button>
    </div>
);

ButtonComponent.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  scales: PropTypes.oneOf(['small', 'normal', 'big']),
  theme: PropTypes.oneOf(['primary', 'secondary', 'cancel', 'dark', 'gray']),
  outline: PropTypes.bool,
};

ButtonComponent.defaultProps = {
  scales: 'normal',
  theme: 'primary',
  outline: false,
};

export default ButtonComponent;
