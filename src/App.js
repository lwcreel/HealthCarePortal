import LandingPage from "./LandingPage.js";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./components/Auth/LoginPage.js";
import AdminDashboard from "./components/Admin/AdminDashboard.js";
import Dashboard from "./components/User/Dashboard.js";
import AdminMedDashboard from "./components/Admin/AdminMedDashboard.js";
import AdminReportDashboard from "./components/Admin/AdminReportDashboard.js";


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login/:isAdmin" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/medicine" element ={<AdminMedDashboard />} />
          <Route path="/admin/reports" element ={<AdminReportDashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
