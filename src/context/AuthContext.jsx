import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { isVerified } from "../api";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setuserName] = useState("");
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    (async function () {
      const { verified, name } = await isVerified();
      setIsAuthenticated(verified);
      setuserName(name);
    })();
    if (!isAuthenticated && pathname.startsWith("/dashboard")) navigate("/auth/signin");
    if (isAuthenticated && pathname.startsWith("/auth")) navigate("/dashboard");
  }, [isAuthenticated]);

  return <AuthContext.Provider value={{ isAuthenticated, userName, setIsAuthenticated, setuserName }}>
    {children}
  </AuthContext.Provider>;
};

export default AuthProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  if (!AuthContext) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return useContext(AuthContext);
};
