import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const SubmitReview = ({ neighborhoodId, onReviewAdded }) => {
  const { token } = useAuth();
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_APP_API_URL}/reviews`,
        { neighborhoodId, rating, comment },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage(res.data.message);
      setComment('');
      if (onReviewAdded) onReviewAdded(); // <-- call this after successful submit
    } catch (err) {
      setMessage(err.response?.data?.message || 'Something went wrong.');
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white rounded-xl shadow-lg space-y-6 max-w-md mx-auto"
    >
      <h3 className="text-xl font-extrabold text-purple-700">Leave a Review</h3>

      <div>
        <label className="block mb-2 font-semibold text-gray-800">Rating:</label>
        <select
          value={rating}
          onChange={(e) => {
            setRating(Number(e.target.value));
            setMessage('');
          }}
          className="w-full border border-purple-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          disabled={loading}
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num} 
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-2 font-semibold text-gray-800">Comment:</label>
        <textarea
          placeholder="Your review..."
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
            setMessage('');
          }}
          className="w-full p-3 border border-purple-300 rounded-lg resize-y focus:outline-none focus:ring-2 focus:ring-purple-500"
          rows={4}
          required
          disabled={loading}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-md font-semibold transition duration-300 disabled:opacity-60"
        disabled={loading}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>

      {message && (
        <p className="text-center text-purple-700 font-medium mt-2">{message}</p>
      )}
    </form>
  );
};

export default SubmitReview;