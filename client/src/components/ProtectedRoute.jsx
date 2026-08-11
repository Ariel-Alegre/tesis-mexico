import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { isAdminAuthenticated } from '../auth';

export default function ProtectedRoute() {
  const location = useLocation();
  return isAdminAuthenticated()
    ? <Outlet />
    : <Navigate to="/admin/login" replace state={{ from: location.pathname }} />;
}
