import React from "react";

const withclass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent></WrappedComponent>
    </div>
  );
};

export default withclass;
