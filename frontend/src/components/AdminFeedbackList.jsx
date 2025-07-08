import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const AdminFeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [error, setError] = useState("");
  const { token } = useAuth();

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_APP_API_URL}/feedback`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setFeedbacks(res.data);
      } catch (err) {
        setError("Failed to fetch feedbacks.");
      }
    };
    fetchFeedback();
  }, [token]);

  if (error) return <div className="text-red-600">{error}</div>;
  if (!feedbacks.length) return <div>No feedback yet.</div>;

  return (
    <ul>
      {feedbacks.map((fb) => (
        <li key={fb._id}>
          <strong>{fb.user?.username || "User"}:</strong> {fb.message}
        </li>
      ))}
    </ul>
  );
};

export default AdminFeedbackList;