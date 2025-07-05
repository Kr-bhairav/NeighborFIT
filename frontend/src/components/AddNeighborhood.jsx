import { useState } from 'react';
import axios from 'axios';

const AddNeighborhood = () => {
  const [formData, setFormData] = useState({
    name: '',
    affordability: '',
    safety: '',
    nightlife: '',
    internet: '',
    greenery: '',
    education: '',
    description: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_APP_API_URL}/neighborhoods`, formData);
      setMessage(res.data.message);
      setFormData({
        name: '',
        affordability: '',
        safety: '',
        nightlife: '',
        internet: '',
        greenery: '',
        education: '',
        description: ''
      });
    } catch (err) {
      setMessage(err.response?.data?.message || 'Error creating neighborhood.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow space-y-4">
      <h3 className="text-xl font-semibold">Add New Neighborhood</h3>
      {['name', 'affordability', 'safety', 'nightlife', 'internet', 'greenery', 'education', 'description'].map((field) => (
        <input
          key={field}
          type={field === 'description' ? 'textarea' : 'text'}
          name={field}
          value={formData[field]}
          onChange={handleChange}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          className="w-full border p-2 rounded"
          required
        />
      ))}
      <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded">Add Neighborhood</button>
      {message && <p className="text-green-600">{message}</p>}
    </form>
  );
};

export default AddNeighborhood;
