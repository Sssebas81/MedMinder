import { useState } from "react";
import { register } from "../services/auth";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = () => {
    if (!email || !password) {
      setMessage("Completa todos los campos");
      return;
    }

    register({ email, password });
    setMessage("Usuario registrado correctamente");

    // redirige después de 1 segundo
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow w-80">
        <h1 className="text-xl font-bold mb-4 text-center">Registro</h1>

        <input
          type="email"
          placeholder="Correo"
          className="w-full border p-2 mb-2 rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="w-full border p-2 mb-4 rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Registrarse
        </button>

        {message && (
          <p className="text-sm mt-2 text-center text-gray-600">
            {message}
          </p>
        )}

        <p className="text-sm text-center mt-3">
          ¿Ya tienes cuenta?{" "}
          <Link to="/" className="text-blue-500">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}