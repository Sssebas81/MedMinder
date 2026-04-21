import type { Medication } from "../../types/Medication";

type Props = {
  med: Medication;
  onDelete: () => void;
};

export default function MedicationCard({ med, onDelete }: Props) {
  return (
    <div className="flex justify-between items-center border p-3 rounded-xl mb-2">
      <div>
        <p className="font-bold">{med.name}</p>
        <p className="text-gray-500">{med.time}</p>
      </div>

      <button onClick={onDelete} className="text-red-500">
        X
      </button>
    </div>
  );
}