import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { GeneralContextInfo } from "./contexts/GeneralContext";

import AdminLayout from "./components/layouts/AdminLayout";

import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import AccountPage from "./pages/adminPages/AccountPage";

import HomePage from "./pages/adminPages/HomePage";
import LeadersPage from "./pages/adminPages/LeadersPage";
import TeachersPage from "./pages/adminPages/TeachersPage";
import StudentsPage from "./pages/adminPages/StudentsPage";
import SettingsPage from "./pages/adminPages/SettingsPage";
import LearningCentersPage from "./pages/adminPages/LearningCentersPage";

const App = () => {
  const { isAuthenticated } = useContext(GeneralContextInfo);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
        {isAuthenticated && (
          <Route path="/" element={<AdminLayout />}>
            <Route path="dashboard" element={<HomePage />} />
            <Route path="admin-account" element={<AccountPage />} />
            <Route path="admin-leaders" element={<LeadersPage />} />
            <Route path="admin-teachers" element={<TeachersPage />} />
            <Route path="admin-students" element={<StudentsPage />} />
            <Route path="admin-settings" element={<SettingsPage />} />
            <Route
              path="admin-learningcenters"
              element={<LearningCentersPage />}
            />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
