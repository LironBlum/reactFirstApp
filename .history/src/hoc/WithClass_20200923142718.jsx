import React from "react";

const withclass = (wrappedComponent, className) => {
  return props => <div className={className}></div>;
};

export default withclass;
