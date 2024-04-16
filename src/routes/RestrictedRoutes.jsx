import { useSelector } from 'react-redux';
import { HOME_ROUTE } from '../constants/routes';
import { selectAuthIsLoggedIn } from '../redux/auth/authSelectors';
import { Navigate } from 'react-router-dom';

const RestrictedRoutes = ({ children, navigaeTo = HOME_ROUTE }) => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return isLoggedIn ? <Navigate to={navigaeTo} replace /> : children;
};

export default RestrictedRoutes;
