import { useAppSelector } from '../redux/hooks';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const user = useAppSelector((state) => state.user);
  const isAuthenticated = Boolean(user && user.nombre && user.correo);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
