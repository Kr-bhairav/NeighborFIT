import { useState, useEffect } from "react";
import axios from "axios";
import {
  Wallet,
  Shield,
  Moon,
  Wifi,
  TreeDeciduous,
  School,
  Scale
} from "lucide-react";
import SubmitReview from "../components/SubmitReview";
import { useAuth } from "../context/AuthContext";

const criteria = [
  { name: "affordability", icon: <Wallet /> },
  { name: "safety", icon: <Shield /> },
  { name: "nightlife", icon: <Moon /> },
  { name: "internet", icon: <Wifi /> },
  { name: "greenery", icon: <TreeDeciduous /> },
  { name: "education", icon: <School /> },
];

const initialPreferences = {
  affordability: 3,
  safety: 3,
  nightlife: 3,
  internet: 3,
  greenery: 3,
  education: 3,
};

const initialWeights = {
  affordability: 0.5,
  safety: 0.5,
  nightlife: 0.5,
  internet: 0.5,
  greenery: 0.5,
  education: 0.5,
};

const API_URL = import.meta.env.VITE_APP_API_URL;

const GetNeighborhood = () => {
  const { user } = useAuth();
  const [preferences, setPreferences] = useState(initialPreferences);
  const [weights, setWeights] = useState(initialWeights);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState({});

  const handlePrefChange = (e) => {
    const { name, value } = e.target;
    setPreferences((prev) => ({ ...prev, [name]: parseInt(value) }));
  };

  const handleWeightChange = (e) => {
    const { name, value } = e.target;
    setWeights((prev) => ({ ...prev, [name]: parseFloat(value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    const payload = { preferences, weights };
    try {
      const response = await axios.post(`${API_URL}/match`, payload, {
        headers: { "Content-Type": "application/json" }
      });
      setResult(response.data);
    } catch (err) {
      setError("Failed to fetch match. Please try again.");
      console.error(err);
    }
    setLoading(false);
  };

  // Fetch reviews for each match
  const fetchReviews = async (neighborhoodId) => {
    try {
      const res = await axios.get(`${API_URL}/review/${neighborhoodId}`);
      setReviews(prev => ({ ...prev, [neighborhoodId]: res.data }));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (result && result.matches) {
      result.matches.forEach((match) => {
        fetchReviews(match._id);
      });
    }
    // eslint-disable-next-line
  }, [result]);

  return (
    <section className="min-h-screen pt-28 px-4 bg-gradient-to-r from-white via-purple-50 to-white flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl font-extrabold text-center text-purple-700 mb-10">
          Find Your Ideal Neighborhood
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {criteria.map(({ name, icon }) => (
            <div
              key={name}
              className="border border-purple-200 rounded-lg p-4 flex flex-col space-y-4 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 text-purple-700 font-semibold text-lg">
                <span className="text-purple-600">{icon}</span>
                <span>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
              </div>

              <div className="flex items-center gap-3">
                <label
                  htmlFor={`pref-${name}`}
                  className="flex-shrink-0 w-28 text-gray-700 font-medium"
                >
                  Preference:
                </label>
                <input
                  id={`pref-${name}`}
                  type="range"
                  min="1"
                  max="5"
                  name={name}
                  value={preferences[name]}
                  onChange={handlePrefChange}
                  className="flex-grow accent-purple-600"
                />
                <span className="w-6 text-center font-semibold text-gray-700">
                  {preferences[name]}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <label
                  htmlFor={`weight-${name}`}
                  className="flex-shrink-0 w-28 text-gray-700 font-medium flex items-center gap-1"
                >
                  <Scale size={18} className="text-purple-600" /> Weight:
                </label>
                <input
                  id={`weight-${name}`}
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  name={name}
                  value={weights[name]}
                  onChange={handleWeightChange}
                  className="flex-grow accent-purple-600"
                />
                <span className="w-10 text-center font-semibold text-gray-700">
                  {weights[name]}
                </span>
              </div>
            </div>
          ))}

          <button
            type="submit"
            disabled={loading}
            className={`md:col-span-2 w-full py-3 rounded-md text-lg font-semibold transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-purple-700 hover:bg-purple-800 text-white"
            }`}
          >
            {loading ? "Loading..." : "Show My Match"}
          </button>

          {error && (
            <p className="md:col-span-2 text-red-600 mt-2 text-center font-medium">
              {error}
            </p>
          )}
        </form>

        {result && result.matches && result.matches.length > 0 && (
          <div className="mt-10">
            <h3 className="text-2xl font-extrabold text-purple-700 mb-6 text-center">
              Matches:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {result.matches.map((match) => (
                <div
                  key={match._id}
                  className="bg-white rounded-xl shadow-md p-6"
                >
                  <div className="font-bold text-xl mb-3">{match.name}</div>
                  <div className="space-y-1 text-gray-700 text-sm">
                    <div>Affordability: {match.affordability}</div>
                    <div>Safety: {match.safety}</div>
                    <div>Nightlife: {match.nightlife}</div>
                    <div>Internet: {match.internet}</div>
                    <div>Greenery: {match.greenery}</div>
                    <div>Education: {match.education}</div>
                    <div className="mt-2">{match.description}</div>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Reviews:</h4>
                    {reviews[match._id]?.length ? (
                      <ul className="text-sm text-gray-700 space-y-1">
                        {reviews[match._id].map((review) => (
  <li key={review._id}>
    <span className="font-semibold">{review.user?.username || "User"}:</span> {review.comment}
  </li>
))}
                      </ul>
                    ) : (
                      <p className="text-gray-400 text-sm">No reviews yet.</p>
                    )}
                  </div>

                  {user && (
                    <div className="mt-4">
                      <SubmitReview
                        neighborhoodId={match._id}
                        onReviewAdded={() => fetchReviews(match._id)}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GetNeighborhood;