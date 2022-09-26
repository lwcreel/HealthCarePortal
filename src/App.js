import LandingPage from "./components/LandingPage.js";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./components/Auth/LoginPage.js";
import AdminDashboard from "./components/Admin/AdminDashboard.js";
import Dashboard from "./components/User/Dashboard.js";
import RegisterUser from "./components/Auth/RegisterUser.js";

// TODO: Add admin and user service routing 

function App() {

  return (
    <BrowserRouter>
      <div className="App" style={{"paddingTop": "10vh"}}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login/false" element={<Login isAdmin="false" />} />
          <Route path="/login/true" element={<Login isAdmin="true"/>} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
