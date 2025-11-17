import React, { use } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useAuth = () => {
  const authData = use(AuthContext);
  return authData;
};

export default useAuth;
