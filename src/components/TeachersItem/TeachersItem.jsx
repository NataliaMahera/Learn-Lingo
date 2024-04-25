import { useMemo, useState } from 'react';
import sprite from '../../assets/icons/sprite.svg';
import {
  BookLessonButton,
  ReadMoreButton,
} from '../ReUseComponents/Buttons/Buttons';
import BookLessonModal from '../BookLessonModal/BookLessonModal';
import UnauthorizedModal from '../UnauthorizedModal/UnauthorizedModal';
import Modal from '../ReUseComponents/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/favorites/favoritesSelectors';
import { selectAuthIsLoggedIn } from '../../redux/auth/authSelectors';
import {
  addToFavorites,
  deleteFromFavorites,
} from '../../redux/favorites/favoritesReducer';
import CardComponent from '../CardComponent/CardComponent';
import { AvatarGenerator } from 'random-avatar-generator';
import Avatar from '../CardAvatar/Avatar';

const generator = new AvatarGenerator();

const TeachersItem = ({ teacher }) => {
  const favoriteItems = useSelector(selectFavorites);
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const dispatch = useDispatch();

  const [showReadMore, setShowReadMore] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalType, setModalType] = useState(null);

  const openModal = (modalType) => {
    setIsOpenModal(true);
    setModalType(modalType);
  };
  const closeModal = () => {
    setIsOpenModal(false);
    setModalType(null);
  };

  const TYPE = {
    BOOKING: 'BOOKING',
    UNAUTHORIZED: 'UNAUTHORIZED',
  };

  const getModalContent = useMemo(() => {
    if (modalType === 'BOOKING') {
      return (
        <BookLessonModal
          closeModal={closeModal}
          modalData={modalType}
          teacher={teacher}
        />
      );
    } else if (modalType === 'UNAUTHORIZED') {
      return (
        <UnauthorizedModal closeModal={closeModal} modalData={modalType} />
      );
    }
    return null;
  }, [modalType, teacher]);

  const isFavorite = favoriteItems.some(({ id }) => id === teacher.id);

  const handleFavoriteToggle = () => {
    if (isLoggedIn) {
      dispatch(
        isFavorite ? deleteFromFavorites(teacher) : addToFavorites(teacher)
      );
    } else {
      openModal(TYPE.UNAUTHORIZED);
    }
  };

  const {
    rating,
    price_per_hour,
    lessons_done,
    levels,
    reviews,
    name,
    surname,
    languages,
    lesson_info,
    conditions,
  } = teacher || {};

  return (
    <>
      <li className=" flex flex-wrap justify-between items-start w-full rounded-[24px] p-[24px] bg-bg-color max-w-[1184px]">
        <Avatar teacher={teacher} />
        <div className="max-w-[968px] w-full">
          <div className="flex flex-wrap mb-[32px] gap-y-[18px] justify-between items-start">
            <div>
              <p className="text-[16px] leading-[1.5] font-medium text-card-text-color mb-[8px]">
                Languages
              </p>
              <h2 className="text-[24px] leading-[1] font-medium text-primary-text-color ">
                {name} {surname}
              </h2>
            </div>
            <div className="flex justify-between items-start max-w-[697px] w-full">
              <ul className="flex flex-wrap justify-start items-center gap-y-[8px] text-[16px] leading-[1.5] font-medium text-primary-text-color">
                <li className="flex items-center">
                  <svg className="w-[16px] h-[16px] stroke-primary-text-color fill-none mr-[4px] ">
                    <use href={`${sprite}#icon-book-open`} />
                  </svg>
                  <p className="descItem">Lessons online</p>
                </li>
                <li>
                  <p className="descItem">Lessons done: {lessons_done}</p>
                </li>
                <li className="flex items-center">
                  <svg className="w-[16px] h-[16px] fill-accent-color mr-[4px]">
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
              <button
                className="p-0 flex justify-center items-center ease-in-out duration-100 hover:scale-[1.035] hover:contrast-[0.9] cursor-pointer "
                type="button"
                onClick={handleFavoriteToggle}
              >
                <svg
                  className={
                    isFavorite ? 'remove-favorite-icon' : 'add-favorite-icon'
                  }
                >
                  <use href={sprite + '#icon-heart'}></use>
                </svg>
              </button>
            </div>
          </div>
          {/* <CardComponent teacher={teacher} /> */}

          <ul className="flex flex-col gap-[8px] text-[16px] mb-[16px] leading-[1.5] font-medium text-primary-text-color">
            <li>
              <p>
                <span className="text-card-text-color">Speaks: </span>
                <span className="underline"> {languages?.join(', ')}</span>
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
              <p className=" mb-[32px]">{teacher.experience}</p>
              <ul className="flex flex-col gap-[32px]">
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
                          <p className="text-card-text-color">
                            {reviewer_name}
                          </p>
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
          <ul className="flex flex-wrap gap-[8px] justify-start items-center mt-[32px]">
            {levels?.map((level, idx) => (
              <li
                key={idx}
                className={`py-[8px] px-[12px] rounded-[35px] border-[1px] border-decor-text-element ${
                  idx === 0 && 'bg-accent-color border-none'
                }`}
              >
                <p className="text-[14px] leading-[1.14] font-medium text-primary-text-color">
                  #{level}
                </p>
              </li>
            ))}
          </ul>
          {!showReadMore && (
            <BookLessonButton onClick={() => openModal(TYPE.BOOKING)}>
              Book trial lesson
            </BookLessonButton>
          )}
        </div>
      </li>
      {isOpenModal && (
        <>
          <Modal
            closeModal={closeModal}
            isOpenModal={isOpenModal}
            body={getModalContent}
          />
        </>
      )}
    </>
  );
};

export default TeachersItem;
