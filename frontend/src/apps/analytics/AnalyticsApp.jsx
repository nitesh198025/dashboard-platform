import { useEffect, useState } from "react";

export default function AnalyticsApp() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://dashboard-platform.onrender.com/analytics/summary")
      .then((res) => res.json())
      .then(setData)
      .catch(err => console.error(err));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <>
      <h2>Analytics Summary</h2>
      <p>Order: {data.order}</p>
      <p>Inventory Risk: {data.inventory_risk}</p>
      <p>AI Score: {data.ai_score}</p>
    </>
  );
}
