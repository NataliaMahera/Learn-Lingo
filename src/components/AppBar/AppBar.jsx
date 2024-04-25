import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from '../../redux/auth/authSelectors';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';

const AppBar = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  return (
    <header className="w-full container flex flex-wrap py-[18px] md:py-[20px] justify-between items-center gap-y-[10px]">
      <Logo />
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
