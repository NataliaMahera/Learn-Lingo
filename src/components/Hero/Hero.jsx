import { HERO_OPTIONS } from '../../constants';
import { TEACHERS_ROUTE } from '../../constants/routes';
import { HeroButton } from '../ReUseComponents/Buttons/Buttons';
import girl from '../../assets/img/hero/hero-img.png';

const Hero = () => {
  return (
    <>
      <div className="flex-wrap lg:flex-nowrap flex gap-[24px] justify-center items-center mb-[24px]">
        <div className="flex flex-col bg-bg-primary-color px-[44px] lg:px-[64px] py-[58px] md:py-[98px] rounded-[30px]">
          <h1 className="lg:mr-[44px] mb-[32px] max-w-[548px] text-[38px] lg:text-[48px] leading-[1.17] font-medium text-primary-text-color">
            Unlock your potential with the best{' '}
            <span className="bg-secondary-accent-color rounded-[8px] italic px-[8px]">
              language
            </span>{' '}
            tutors
          </h1>
          <p className="mb-[64px] max-w-[471px] text-[16px] leading-[1.37] text-primary-text-color">
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <HeroButton to={TEACHERS_ROUTE}>Get started</HeroButton>
        </div>
        <div className="bg-secondary-accent-color px-[88px] pt-[80px] rounded-[30px] w-full lg:max-w-[568px] ">
          <img className="" src={girl} alt="girl" />
        </div>
      </div>
      <ul className="flex border-dashed justify-start md:justify-center flex-wrap lg:flex-nowrap border-[2px] border-accent-color gap-x-[100px] gap-y-[20px] lg:px-[123px] px-[10px] py-[40px] rounded-[30px] mb-[32px]">
        {HERO_OPTIONS.map(({ number, title, id }) => (
          <li key={id} className="hero-list-item">
            <p className="hero-num-desc">{number}</p>
            <p className="hero-desc">{title}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Hero;

// className="flex bg-cover bg-center gap-[100px] px-[123px] py-[40px] rounded-[30px] mb-[32px]"
