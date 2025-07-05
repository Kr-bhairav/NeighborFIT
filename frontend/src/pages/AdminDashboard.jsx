import AddNeighborhood from "../components/AddNeighborhood";
import AdminFeedbackList from "../components/AdminFeedbackList";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-white py-10 px-6">
      <div className="max-w-5xl mx-auto space-y-10">
        <h1 className="text-4xl font-extrabold text-purple-800 text-center">
          Admin Dashboard
        </h1>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">Add New Neighborhood</h2>
          <AddNeighborhood />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">User Feedback</h2>
          <AdminFeedbackList />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
