import { useState } from "react";

export default function Settings() {
  const [lang, setLang] = useState("es");
  const [size, setSize] = useState("text-base");

  return (
    <div className="p-6">
      <h2>Configuración</h2>

      <select onChange={(e) => setLang(e.target.value)}>
        <option value="es">Español</option>
        <option value="en">English</option>
      </select>

      <select onChange={(e) => setSize(e.target.value)}>
        <option value="text-base">Normal</option>
        <option value="text-xl">Grande</option>
      </select>
    </div>
  );
}