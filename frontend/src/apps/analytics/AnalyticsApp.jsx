import { useEffect, useState } from "react";

export default function AnalyticsApp() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://YOUR-BACKEND-URL.onrender.com/analytics/summary")
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <>
      <h2>Analytics</h2>
      <p>Orders: {data.orders}</p>
      <p>Inventory Risk: {data.inventory_risk}</p>
      <p>AI Score: {data.ai_score}</p>
    </>
  );
}
