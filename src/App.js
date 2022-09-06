import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/dashboard/dashboard";
import DatabaseReport from "./pages/databaseReport/databaseReport";
import History from "./pages/history/history";
import HistoryReport from "./pages/historyReport/historyReport";
import Report from "./pages/report/report";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reports/new" element={<Report />} />
        <Route path="/reports/all" element={<DatabaseReport />} />
        <Route path="/reports/history" element={<HistoryReport />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
