import { useState } from "react";
import { searchDrugs } from "../services/medsApi";

export default function Guides() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = async () => {
    const data = await searchDrugs(query);
    setResults(data);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">📚 Guías de medicamentos</h1>

      <input
        className="border p-2 mr-2"
        placeholder="Buscar medicamento"
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={handleSearch} className="bg-blue-500 text-white p-2">
        Buscar
      </button>

      <div className="mt-4">
        {results.map((r, i) => (
          <div key={i} className="border p-2 mb-2">
            <p className="font-bold">
              {r.openfda?.brand_name?.[0] || "Sin nombre"}
            </p>
            <p>{r.purpose?.[0]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}