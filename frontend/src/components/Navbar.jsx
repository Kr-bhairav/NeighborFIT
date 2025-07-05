import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-purple-700">
          Neighbor<span className="text-gray-900">Fit</span>
        </Link>

        <div className="hidden md:flex gap-6 text-gray-700 font-medium">
          <a href="#about" className="hover:text-purple-600 transition">About</a>
          <a href="#how-it-works" className="hover:text-purple-600 transition">Guide</a>
          <Link to="/get" className="hover:text-purple-600 transition">Get Your Neighborhood</Link>
          {user ? (
            <button onClick={logout} className="hover:text-red-500 transition">Logout</button>
          ) : (
            <>
              <Link to="/login" className="hover:text-purple-600 transition">Login</Link>
              <Link to="/signup" className="hover:text-purple-600 transition">Signup</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;