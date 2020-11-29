import React from 'react';
import PropTypes from 'prop-types';

const Index = ({ children }) => {
  return (
    <div className="container-fluid d-flex flex-column justify-content-between h-100">
      {children}
    </div>
  );
};
Index.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Index;
