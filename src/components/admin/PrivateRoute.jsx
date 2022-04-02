import LogServices from "../../services/LogServices";
import React from 'react'
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const auth = LogServices.checkToken();
  return auth ? children : <Navigate to = "/login" />
}
export default PrivateRoute