import { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = () => {
    if (!email) {
      setMessage("Ingresa tu correo");
      return;
    }

    // simulación
    setMessage("Se ha enviado un enlace de recuperación (simulado)");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow w-80">
        <h1 className="text-xl font-bold mb-4 text-center">
          Recuperar contraseña
        </h1>

        <input
          type="email"
          placeholder="Correo"
          className="w-full border p-2 mb-4 rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={handleReset}
          className="w-full bg-green-500 text-white p-2 rounded"
        >
          Enviar enlace
        </button>

        {message && (
          <p className="text-sm mt-2 text-center text-gray-600">
            {message}
          </p>
        )}

        <p className="text-sm text-center mt-3">
          <Link to="/" className="text-blue-500">
            Volver al login
          </Link>
        </p>
      </div>
    </div>
  );
}