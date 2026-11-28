import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPages";
import LoginPage from "./pages/LoginPages";
import RegisterPage from "./pages/RegistrationPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import CreateTaskPage from "./pages/CreateTaskPage";
import DashboardPage from "./pages/DashboardPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/create-task" element={<CreateTaskPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}

export default App;