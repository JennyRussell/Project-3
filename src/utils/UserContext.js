import React from "react";

const UserContext = React.createContext({
  _id: "",
  first_name: "",
  last_name: "",
  email: "",
  orders: [],
});

export default UserContext;
