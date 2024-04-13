import { NavLink } from 'react-router-dom';
import sprite from '../../../assets/icons/sprite.svg';

export const LinkHeaderNav = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return (
          'font-normal text-[14px} md:text-[16px] leading-[1.25]' +
          (!isActive
            ? ' text-primary-text-color'
            : ' text-accent-color transition')
        );
      }}
    >
      {children}
    </NavLink>
  );
};

export const LoginBtn = ({ onClick }) => {
  return (
    <div className="flex gap-x-[8px] justify-center items-center">
      <svg className="fill-none stroke-[2px] stroke-accent-color w-[20px] h-[20px]">
        <use href={sprite + '#icon-log-in'}></use>
      </svg>
      <button
        type="submit"
        className="transition-colors hover:text-accent-color text-[16px] leading-[1.25] font-bold text-primary-text-color"
        onClick={onClick}
      >
        Log in
      </button>
    </div>
  );
};

export const LogoutBtn = ({ onClick }) => {
  return (
    <div className="flex gap-x-[8px] justify-center items-center">
      <svg className="fill-none stroke-[2px] stroke-accent-color w-[20px] h-[20px]">
        <use href={sprite + '#icon-log-out'}></use>
      </svg>
      <button
        type="submit"
        className="transition-colors hover:text-accent-color text-[16px] leading-[1.25] font-bold text-primary-text-color"
        onClick={onClick}
      >
        Log out
      </button>
    </div>
  );
};

export const RegisterBtn = ({ onClick }) => {
  return (
    <button
      type="submit"
      className="transition-colors bg-primary-text-color py-[14px] px-[39px] rounded-[12px] hover:text-accent-color text-[16px] leading-[1.25] font-bold text-bg-color"
      onClick={onClick}
    >
      Registration
    </button>
  );
};

export const CloseModalButton = ({ onClick }) => {
  return (
    <button
      type="button"
      className="absolute top-[20px] right-[20px]"
      onClick={onClick}
    >
      <svg className="stroke-[2.5px] stroke-primary-text-color w-[32px] h-[32px]">
        <use href={sprite + '#icon-close'}></use>
      </svg>
    </button>
  );
};

export const OpenEyeIcon = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      className="absolute w-[20px] h-[20px] top-[18px] right-[18px] fill-icon-color"
    >
      <use href={sprite + '#icon-eye'}></use>
    </svg>
  );
};

export const BlockedEyeIcon = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      className="absolute w-[20px] h-[20px] top-[18px] right-[18px] fill-icon-color "
    >
      <use href={sprite + '#icon-eye-blocked'}></use>
    </svg>
  );
};

// export const LoadMoreButton = ({ onClick }) => {
//   return (
//     <button
//       type="button"
//       className="transition-colors hover:text-accent-hover-color block mb-[70px] underline mx-auto text-[16px] leading-[1.5] font-medium text-accent-color"
//       onClick={onClick}
//     >
//       Load more
//     </button>
//   );
// };

// export const LearnMoreButton = ({ children, onClick }) => {
//   return (
//     <button
//       type="button"
//       className="hover:shadow-lg shadow-primary-text-button-color/50 font-semibold text-[14px] leading-[1.43] mt-[28px] w-full py-[12px] rounded-[12px] bg-accent-color text-btn-text-color hover:bg-accent-hover-color transition-colors"
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   );
// };

// export const ToggleFavoritesButton = ({ onClick, id }) => {
//   return (
//     <button
//       type="button"
//       className="ease-in-out duration-100 hover:scale-[1.035] hover:contrast-[0.9] absolute top-[14px] right-[14px] cursor-pointer "
//       onClick={onClick}
//       id={id}
//     >
//       <svg className="ease-in-out duration-100 hover:scale-[1.035] hover:contrast-[0.9] fill-none stroke-[1.5px] stroke-stroke-color w-[18px] h-[18px]">
//         <use href={sprite + '#icon-heart'}></use>
//       </svg>
//     </button>
//   );
// };

// export const ToggleFavoritesDeleteButton = ({ onClick, id }) => {
//   return (
//     <button
//       type="button"
//       className="ease-in-out duration-100 hover:scale-[1.035] hover:contrast-[0.9] absolute cursor-pointer top-[14px] right-[14px] "
//       onClick={onClick}
//       id={id}
//     >
//       <svg className="ease-in-out duration-100 hover:scale-[1.035] hover:contrast-[0.9] stroke-[1.5px] stroke-accent-color fill-accent-color w-[18px] h-[18px]">
//         <use href={sprite + '#icon-active-heart'}></use>
//       </svg>
//     </button>
//   );
// };

// export const FilterButton = ({ type, onClick, children }) => {
//   return (
//     <button
//       className="hover:shadow-lg shadow-primary-text-button-color/50 font-semibold text-[14px] leading-[1.43] mt-[24px] py-[14px] px-[44px] rounded-[12px] bg-accent-color text-btn-text-color hover:bg-accent-hover-color focus:outline-none transition-colors"
//       type={type}
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   );
// };
