export const searchDrugs = async (query: string) => {
  const res = await fetch(
    `https://api.fda.gov/drug/label.json?search=${query}&limit=5`
  );

  const data = await res.json();
  return data.results;
}; 