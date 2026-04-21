import { useState } from "react";
import type { Medication } from "../../types/Medication";

type Props = {
  onAdd: (med: Medication) => void;
};

export default function MedicationForm({ onAdd }: Props) {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = () => {
    if (!name || !time) return;

    onAdd({ name, time });
    setName("");
    setTime("");
  };

  return (
    <div className="mb-4">
      <input
        className="w-full p-2 border mb-2"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="time"
        className="w-full p-2 border mb-2"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-green-500 text-white p-2 rounded"
      >
        Guardar
      </button>
    </div>
  );
}