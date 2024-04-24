import { AvatarGenerator } from 'random-avatar-generator';
import { useState } from 'react';
import { ReadMoreButton } from '../ReUseComponents/Buttons/Buttons';
import sprite from '../../assets/icons/sprite.svg';

const generator = new AvatarGenerator();

const ReadMore = ({ teacher }) => {
  const [showReadMore, setShowReadMore] = useState(true);
  const { levels, reviews } = teacher || {};
  return (
    <>
      {showReadMore ? (
        <ReadMoreButton onClick={() => setShowReadMore(false)}>
          Read more
        </ReadMoreButton>
      ) : (
        <>
          <p className="max-w-[968px] mb-[32px]">{teacher.experience}</p>
          <ul className="">
            {reviews?.map(
              ({ reviewer_name, reviewer_rating, comment }, idx) => (
                <li key={idx}>
                  <div className="flex gap-[12px]">
                    <img
                      src={generator.generateRandomAvatar()}
                      alt={reviewer_name}
                      className="w-[44px] h-[44px] rounded-[50%] bg-secondary-accent-color"
                    />
                    <div className="text-[16px] leading-[1.5] font-medium">
                      <p className="text-card-text-color">{reviewer_name}</p>
                      <div className="flex justify-center items-center gap-[8px]">
                        <svg
                          className="w-[16px] h-[16px] fill-accent-color"
                          aria-label="star icon"
                        >
                          <use href={sprite + '#icon-star'}></use>
                        </svg>
                        <p className="text-[14px] leading-[1.29] font-medium text-primary-text-color">
                          {reviewer_rating}.0
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-[16px]">{comment}</p>
                </li>
              )
            )}
          </ul>
        </>
      )}
      <ul className="flex gap-[8px]">
        {levels?.map((level, idx) => (
          <li
            key={idx}
            className={`py-[8px] px-[12px] rounded-[35px] border-[1px] border-decor-text-element mt-[32px] ${
              idx === 0 && 'bg-accent-color border-none'
            }`}
          >
            <p className="text-[14px] leading-[1.14] font-medium text-primary-text-color">
              #{level}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReadMore;
