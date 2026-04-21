import type { Medication } from "../types/Medication";

const MEDS_KEY = "meds";

export const getMedications = (): Medication[] => {
  const data = localStorage.getItem(MEDS_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveMedications = (meds: Medication[]) => {
  localStorage.setItem(MEDS_KEY, JSON.stringify(meds));
};

export const addMedication = (med: Medication) => {
  const meds = getMedications();
  const updated = [...meds, med];
  saveMedications(updated);
  return updated;
};

export const deleteMedication = (index: number) => {
  const meds = getMedications();
  const updated = meds.filter((_, i) => i !== index);
  saveMedications(updated);
  return updated;
};

export const clearMedications = () => {
  localStorage.removeItem(MEDS_KEY);
};