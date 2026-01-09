import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import AnalyticsApp from "../apps/analytics/AnalyticsApp";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<AnalyticsApp />} />
          <Route path="analytics" element={<AnalyticsApp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
