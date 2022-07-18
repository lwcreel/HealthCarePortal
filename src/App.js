import LandingPage from "./LandingPage.js";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./components/Auth/LoginPage.js";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login/:isAdmin" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
