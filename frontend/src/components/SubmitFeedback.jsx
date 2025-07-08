import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const SubmitFeedback = () => {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState('');
  const { token } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${import.meta.env.VITE_APP_API_URL}/feedback`,
        { message },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSubmitted('Thank you for your feedback!');
      setMessage('');
    } catch (err) {
      setSubmitted('Failed to submit feedback.');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="p-6 bg-gradient-to-r from-white via-purple-50 to-white shadow-lg rounded-lg max-w-md mx-auto space-y-6"
    >
      <h3 className="text-2xl font-extrabold text-gray-900">Submit Feedback</h3>
      <textarea
        placeholder="Write your feedback here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full p-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-y"
        rows={5}
        required
      />
      <button 
        type="submit" 
        className="bg-purple-700 hover:bg-purple-800 transition duration-300 text-white px-6 py-3 rounded-md font-semibold w-full"
      >
        Send
      </button>
      {submitted && <p className="text-purple-700 font-medium text-center">{submitted}</p>}
    </form>
  );
};

export default SubmitFeedback;