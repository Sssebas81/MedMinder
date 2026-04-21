import type { User } from "../types/User";

export const register = (user: User) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const login = (email: string, password: string) => {
  const saved = JSON.parse(localStorage.getItem("user") || "null");

  if (!saved) return false;

  return saved.email === email && saved.password === password;
};