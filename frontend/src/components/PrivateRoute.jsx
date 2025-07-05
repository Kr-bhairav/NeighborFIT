import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children, allowedRoles }) => {
  const { token, user } = useAuth();

  // If not logged in
  if (!token) return <Navigate to="/login" replace />;

  // If role check is required and user doesn't have access
  if (allowedRoles && !allowedRoles.includes(user?.role)) {
    return <Navigate to="/" replace />;
  }

  // Otherwise, allow access
  return children;
};

export default PrivateRoute;
