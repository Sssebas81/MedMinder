import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-around p-4 bg-gray-100">
      <Link to="/dashboard">Inicio</Link>
      <Link to="/guides">Guías</Link>
      <Link to="/settings">Configuración</Link>
    </nav>
  );
}