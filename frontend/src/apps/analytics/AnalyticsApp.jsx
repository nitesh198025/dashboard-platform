import { useEffect, useState } from "react";

export default function AnalyticsApp() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dashboard-platform.onrender.com/analytics/summary")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((json) => {
        console.log("FETCHED DATA:", json); // ✅ debug log
        setData(json);
      })
      .catch((err) => {
        console.error("FETCH ERROR:", err);
        setError(err.message);
      });
  }, []);

  if (error) {
    return <p style={{ color: "red" }}>Error: {error}</p>;
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Analytics Summary</h2>

      {/* Debug view (safe to remove later) */}
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <p><strong>Order:</strong> {data.order}</p>
      <p><strong>Inventory Risk:</strong> {data.inventory_risk}</p>
      <p><strong>AI Score:</strong> {data.ai_score}</p>
    </div>
  );
}
