import { useMemo, useState } from 'react';
import sprite from '../../assets/icons/sprite.svg';
import { BookLessonButton } from '../ReUseComponents/Buttons/Buttons';
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
import ReadMore from '../ReadMore/ReadMore';
import CardComponent from '../CardComponent/CardComponent';
import CardAvatar from '../CardAvatar/Cardavatar';

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

  const { rating, price_per_hour, lessons_done } = teacher || {};

  return (
    <>
      <li className="relative flex w-auto rounded-[24px] p-[24px] bg-bg-color gap-[48px]">
        <CardAvatar teacher={teacher} />
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

                <button
                  className="ml-[61px] flex justify-start ease-in-out duration-100 hover:scale-[1.035] hover:contrast-[0.9] cursor-pointer "
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
              </ul>
            </div>
          </div>
          <CardComponent teacher={teacher} />
          <ReadMore teacher={teacher} />
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
