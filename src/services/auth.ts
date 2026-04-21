import type { User } from "../types/User";

const KEY = "user";

// registrar usuario
export const register = (user: User) => {
  localStorage.setItem(KEY, JSON.stringify(user));
};

// login
export const login = (email: string, password: string): User | null => {
  const saved = JSON.parse(localStorage.getItem(KEY) || "null");

  if (!saved) return null;

  if (saved.email === email && saved.password === password) {
    return saved;
  }

  return null;
};

// obtener usuario actual
export const getCurrentUser = (): User | null => {
  return JSON.parse(localStorage.getItem(KEY) || "null");
};

// logout
export const logout = () => {
  localStorage.removeItem(KEY);
};