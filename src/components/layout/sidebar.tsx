import { Link } from "react-router-dom";
import { logout } from "../../services/auth";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4 flex flex-col">
      <h1 className="text-xl mb-6 font-bold">💊 Meds App</h1>

      <Link to="/dashboard" className="mb-4">
        🏠 Inicio
      </Link>

      <Link to="/guides" className="mb-4">
        📚 Guías
      </Link>

      <Link to="/settings" className="mb-4">
        ⚙️ Configuración
      </Link>

      <button
        onClick={() => {
          logout();
          window.location.href = "/";
        }}
        className="mt-auto text-red-400"
      >
        🚪 Salir
      </button>
    </div>
  );
}