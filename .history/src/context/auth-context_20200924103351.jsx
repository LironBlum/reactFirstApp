import React from "react";

const authContext = React.createContext({
  authentucated: false,
  login: () => {}
});

export default authContext;
