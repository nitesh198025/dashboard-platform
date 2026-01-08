import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import AnalyticsApp from "../apps/analytics/AnalyticsApp";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          <Route path="/analytics" element={<AnalyticsApp />} />
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  );
}
