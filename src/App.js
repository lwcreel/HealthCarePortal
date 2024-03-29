import LandingPage from "./components/LandingPage.js";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./components/Auth/LoginPage.js";
import AdminDashboard from "./components/Admin/AdminDashboard.js";
import Dashboard from "./components/User/Dashboard.js";
import Register from "./components/Auth/RegisterUser.js";
import Profile from "./components/Profile.js";

// TODO: Add admin and user service routing 

function App() {

  return (
    <BrowserRouter>
      <div className="App" style={{"paddingTop": "10vh"}}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login isAdmin="false" />} />
          <Route path="/login" element={<Login isAdmin="true"/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
