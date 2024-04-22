import { useState } from 'react';
import sprite from '../../assets/icons/sprite.svg';
import {
  ReadMoreButton,
  TeachersPageUniversalButton,
  ToggleFavoritesButton,
} from '../ReUseComponents/Buttons/Buttons';

import { AvatarGenerator } from 'random-avatar-generator';

const generator = new AvatarGenerator();

const TeachersItem = ({ teacher }) => {
  const [showReadMore, setShowReadMore] = useState(true);

  const {
    name,
    surname,
    languages,
    levels,
    rating,
    reviews,
    price_per_hour,
    lessons_done,
    avatar_url,
    lesson_info,
    conditions,
    experience,
  } = teacher || {};

  return (
    <li className="relative flex w-auto rounded-[24px] p-[24px] bg-bg-color gap-[48px]">
      <div className=" relative flex justify-center items-center w-[120px] h-[120px] rounded-[50%] border-[3px] border-secondary-accent-color">
        <img
          className="w-[96px] h-[96px] rounded-[50%] bg-secondary-accent-color "
          src={avatar_url}
          alt={`${name}, ${surname}`}
        />
        <svg className="absolute top-[17px] right-[20px] fill-green-color w-[12px] h-[12px] rounded-[50%] border-[2px] border-bg-color">
          <use href={`${sprite}#icon-green-point`} />
        </svg>
      </div>

      <div>
        <div className="flex gap-[192px]">
          <div>
            <p className="text-[16px] leading-[1.5] font-medium text-card-text-color mb-[8px]">
              Languages
            </p>
          </div>

          <div>
            <ul className="flex text-[16px] leading-[1.5] font-medium text-primary-text-color">
              <li className="flex justify-center items-center gap-[8px] ">
                <svg className="w-[16px] h-[16px] stroke-primary-text-color fill-none ">
                  <use href={`${sprite}#icon-book-open`} />
                </svg>
                <p className="descItem">Lessons online</p>
              </li>
              <li>
                <p className="descItem">Lessons done: {lessons_done}</p>
              </li>
              <li className="flex justify-center items-center gap-[8px] ">
                <svg className="w-[16px] h-[16px] fill-accent-color">
                  <use href={`${sprite}#icon-star`} />
                </svg>
                <p className="descItem">Rating: {rating}</p>
              </li>
              <li>
                <p>
                  Price / 1 hour:{' '}
                  <span className="text-green-color">{price_per_hour}$</span>
                </p>
              </li>
            </ul>
          </div>
          <ToggleFavoritesButton />
        </div>
        <h2 className="text-[24px] leading-[1] font-medium text-primary-text-color mb-[32px]">
          {name} {surname}
        </h2>

        <ul className="flex flex-col gap-[8px] text-[16px] mb-[16px] leading-[1.5] font-medium text-primary-text-color">
          <li>
            <p>
              <span className="text-card-text-color">Speaks: </span>
              <span className="underline"> {languages.join(', ')}</span>
            </p>
          </li>
          <li>
            <p>
              <span className="text-card-text-color">Lesson Info: </span>
              {lesson_info}
            </p>
          </li>
          <li>
            {' '}
            <p>
              <span className="text-card-text-color">Conditions: </span>
              {conditions.map((condition) => {
                return condition + ' ';
              })}
            </p>
          </li>
        </ul>
        {showReadMore ? (
          <ReadMoreButton onClick={() => setShowReadMore(false)}>
            Read more
          </ReadMoreButton>
        ) : (
          <>
            <p className="max-w-[968px] mb-[32px]">{experience}</p>
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
              className="py-[8px] px-[12px] rounded-[35px] border-[1px] border-decor-text-element mt-[32px]"
            >
              <p className="text-[14px] leading-[1.14] font-medium text-primary-text-color">
                #{level}
              </p>
            </li>
          ))}
        </ul>
        {!showReadMore && (
          <TeachersPageUniversalButton className="mt-[32px]">
            Book trial lesson
          </TeachersPageUniversalButton>
        )}
      </div>
    </li>
  );
};

export default TeachersItem;
