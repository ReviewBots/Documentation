import React from 'react';

const Playground = ({children}) => {
  if (typeof window === 'undefined') {
    return null;
  }

  const groundStyle = {
    border: '1px solid rgba(125,125,125,0.3)',
    borderBottom: 'none',
    borderRadius: '5px 5px 0 0',
    padding: '10px'
  };

  return (
    <div style={groundStyle}>{children}</div>
  );
};

export default Playground;
