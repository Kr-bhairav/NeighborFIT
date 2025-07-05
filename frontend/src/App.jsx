import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GetNeighborhood from "./pages/GetNeighborhood";
import { AuthProvider } from "./context/AuthContext";
import LoginSignUp from "./pages/LoginSignUp";
import PrivateRoute from "./components/PrivateRoute";
import AdminDashboard from "./pages/AdminDashboard";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/get" element={<PrivateRoute><GetNeighborhood /></PrivateRoute>} />
        <Route
          path="/admin"
          element={
            <PrivateRoute allowedRoles={["admin"]}>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
};

export default App;
