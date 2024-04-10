import { HEADER_NAV_LINKS } from '../../constants';
import Logo from '../Logo/Logo';
import { LinkHeaderNav } from '../ReUseComponents/Buttons/Buttons';

const Header = () => {
  return (
    <header className="container flex py-[18px] md:py-[25px] justify-between items-center border-after-desc-element border-b-[1px]">
      <Logo />
      <nav>
        <ul className="flex gap-x-[1px] md:gap-x-[40px] ">
          {HEADER_NAV_LINKS.map(({ id, href, title }) => (
            <li key={id}>
              <LinkHeaderNav to={href}>{title}</LinkHeaderNav>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
