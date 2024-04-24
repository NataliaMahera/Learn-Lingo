import TeachersItem from '../TeachersItem/TeachersItem';
import { useSelector } from 'react-redux';
import { selectAuthIsLoading } from '../../redux/auth/authSelectors';
import Loader from '../Loader/Loader';
import { nanoid } from '@reduxjs/toolkit';

const TeachersList = ({ teachers }) => {
  const isLoading = useSelector(selectAuthIsLoading);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <ul className="flex flex-col w-auto gap-[32px]">
        {teachers?.map((teacher) => {
          const id = nanoid();
          return <TeachersItem key={id} teacher={teacher} />;
        })}
        console.log(teachers);
      </ul>
    </>
  );
};

export default TeachersList;
