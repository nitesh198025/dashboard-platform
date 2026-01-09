import { useEffect, useState } from "react";

export default function AnalyticsApp() {
  const [data, setData] = useState(null);

  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetch(`${API_BASE}/analytics/summary`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("API error:", err));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <>
      <h2>Analytics Summary</h2>
      <p>Orders: {data.order}</p>
      <p>Inventory Risk: {data.inventory_risk}</p>
      <p>AI Score: {data.ai_score}</p>
    </>
  );
}
