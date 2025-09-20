import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FormProvider } from "./FormContext";

// Pages
import MobilePage from "./pages/MobilePage";
import AadhaarPage from "./pages/AadhaarPage";
import ProfileFormPage from "./pages/ProfileFormPage";
import PanCardPage from "./pages/PanCardPage";
import ProfilePage from "./pages/ProfilePage";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminPage from "./pages/AdminPage";

export default function App() {
  return (
    <FormProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MobilePage />} />
          <Route path="/aadhaar" element={<AadhaarPage />} />
          <Route path="/profile" element={<ProfileFormPage />} />
          <Route path="/pan" element={<PanCardPage />} />
          <Route path="/profile-view" element={<ProfilePage />} />
          <Route path="/admin-login" element={<AdminLoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Router>
    </FormProvider>
  );
}