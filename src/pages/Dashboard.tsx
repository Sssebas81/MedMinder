import { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import type { Medication } from "../types/Medication";
import MedicationForm from "../components/medication/medicationForm";
import MedicationCard from "../components/medication/medicationCard";

export default function Dashboard() {
  const [meds, setMeds] = useState<Medication[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("meds") || "[]");
    setMeds(saved);
  }, []);

  const addMed = (med: Medication) => {
    const updated = [...meds, med];
    setMeds(updated);
    localStorage.setItem("meds", JSON.stringify(updated));
  };

  const deleteMed = (index: number) => {
    const updated = meds.filter((_, i) => i !== index);
    setMeds(updated);
    localStorage.setItem("meds", JSON.stringify(updated));
  };

  return (
    <div className="p-4">
      <Navbar />

      <h1 className="text-2xl font-bold mb-4">Medicamentos</h1>

      <MedicationForm onAdd={addMed} />

      {meds.map((med, i) => (
        <MedicationCard
          key={i}
          med={med}
          onDelete={() => deleteMed(i)}
        />
      ))}
    </div>
  );
}