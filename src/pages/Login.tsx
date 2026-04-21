import { useState } from "react";
import { login } from "../services/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const ok = login(email, password);

    if (!ok) {
      alert("Credenciales incorrectas");
      return;
    }

    window.location.href = "/dashboard";
  };

  return (
    <div className="p-6">
      <input
        placeholder="Email"
        className="block mb-2 p-2 border"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="block mb-2 p-2 border"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="bg-green-500 text-white p-2"
      >
        Login
      </button>
    </div>
  );
}