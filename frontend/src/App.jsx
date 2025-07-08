import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import LoginSignUp from '../src/pages/LoginSignUp';
import Home from '../src/pages/Home';
import GetNeighborhood from '../src/pages/GetNeighborhood';
import AdminDashboard from "./pages/AdminDashboard";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/get" element={<GetNeighborhood />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute adminOnly={true}>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
};

export default App;