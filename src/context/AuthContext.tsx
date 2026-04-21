import { createContext, useState, useEffect } from "react";
import {
  login as loginService,
  logout as logoutService,
  getCurrentUser,
} from "../services/auth";
import type { User } from "../types/User";

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => false,
  logout: () => {},
});

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const saved = getCurrentUser();
    if (saved) setUser(saved);
  }, []);

  const login = (email: string, password: string) => {
    const user = loginService(email, password);

    if (user) {
      setUser(user);
      return true;
    }

    return false;
  };

  const logout = () => {
    logoutService();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}