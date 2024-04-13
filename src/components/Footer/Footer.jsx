import { Link } from 'react-router-dom';
import sprite from '../../assets/icons/sprite.svg';

const Footer = () => {
  return (
    <section className="container py-[50px] border-after-desc-element border-t-[1px]">
      <div className="flex justify-center items-center gap-x-1">
        <Link to={'/'} className="flex gap-x-[8px] items-center">
          <svg className="w-[22px] h-[22px] md:w-[20px] md:h-[20px]">
            <use href={sprite + '#icon-ukraine'}></use>
          </svg>
          <p className="font-medium text-primary-text-color text-[16px] leading-[1.12] md:text-[16px] md:leading-[1.2]">
            LearnLingo
          </p>
        </Link>
        | Developed by
        <Link
          className="font-semibold"
          to="https://github.com/NataliaMahera"
          target="_blank"
        >
          Natalia Mahera
        </Link>
      </div>
    </section>
  );
};

export default Footer;
