import LandingPage from "./components/LandingPage.js";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./components/Auth/LoginPage.js";
import AdminDashboard from "./components/Admin/AdminDashboard.js";
import Dashboard from "./components/User/Dashboard.js";

// TODO: Add admin and user service routing 

function App() {

  return (
    <BrowserRouter>
      <div className="App" style={{"padding-top": "10vh"}}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login/:isAdmin" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
