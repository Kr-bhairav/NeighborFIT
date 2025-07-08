import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import AddNeighborhood from "../components/AddNeighborhood";
import AdminFeedbackList from "../components/AdminFeedbackList";
import { LogOut } from "lucide-react";

const AdminDashboard = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-100 to-white px-4 py-6 relative">
      <button
        onClick={handleLogout}
        className="fixed top-4 right-4 flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full shadow transition duration-300"
      >
        <LogOut size={18} />
        Logout
      </button>

      <div className="max-w-5xl mx-auto space-y-10 mt-10">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-purple-800 mb-2">
            Admin Dashboard
          </h1>
          {user?.username && (
            <p className="text-gray-600">Welcome, <span className="font-semibold">{user.username}</span> 👋</p>
          )}
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">
            Add New Neighborhood
          </h2>
          <AddNeighborhood />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">
            User Feedback
          </h2>
          <AdminFeedbackList />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
