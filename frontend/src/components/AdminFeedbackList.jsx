import { useEffect, useState } from 'react';
import axios from 'axios';

const AdminFeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}/feedback`);
        setFeedbacks(res.data);
      } catch (err) {
        console.error('Failed to fetch feedback');
      }
    };
    fetchFeedback();
  }, []);

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">User Feedback</h2>
      {feedbacks.length === 0 ? (
        <p>No feedback yet.</p>
      ) : (
        feedbacks.map((fb) => (
          <div key={fb._id} className="mb-3 border-b pb-2">
            <p className="font-semibold">{fb.user?.username || 'Unknown User'}</p>
            <p className="text-sm text-gray-600">{new Date(fb.createdAt).toLocaleString()}</p>
            <p>{fb.message}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default AdminFeedbackList;
