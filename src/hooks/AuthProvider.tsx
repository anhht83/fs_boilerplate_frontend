import React, { createContext, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login as loginAction, register as registerAction } from "@/stores/auth/actions";
import storage from "@/utils/storage";
import getAuthSelector from "@/stores/auth/selectors";

interface IAuthContext {
  selector: any;
  authenticated: boolean;
  login: () => void;
  logOut: () => void;
  register: () => void;
}

const defaultValue: IAuthContext = {
  selector: {},
  authenticated: false,
  login: () => void (0),
  logOut: () => void (0),
  register: () => void (0)
};

const AuthContext = createContext<IAuthContext>(defaultValue);

const AuthProvider: React.FC<any> = ({ children }) => {
  const dispatch = useDispatch();
  const selector = useSelector(getAuthSelector);
  const user = storage.getItem("user");
  const [authenticated, setAuthenticated] = useState(
    user && user.id
  );

  const login: any = (values: object) => dispatch(loginAction(values));
  const logOut: any = () => {
    storage.removeItem("user");
    setAuthenticated(false);
  };
  const register: any = (values: object) => dispatch(registerAction(values));

  useEffect(() => {
    setAuthenticated(user && user.id);
  }, [user]);

  return (
    <AuthContext.Provider value={{ selector, authenticated, login, logOut, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;