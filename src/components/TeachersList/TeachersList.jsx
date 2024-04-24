import TeachersItem from '../TeachersItem/TeachersItem';
import { useSelector } from 'react-redux';
import { selectAuthIsLoading } from '../../redux/auth/authSelectors';
import Loader from '../Loader/Loader';

const TeachersList = ({ teachers }) => {
  const isLoading = useSelector(selectAuthIsLoading);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <ul className="flex flex-col w-auto gap-[32px]">
        {teachers?.map((teacher) => {
          return <TeachersItem key={teacher.id} teacher={teacher} />;
        })}
      </ul>
    </>
  );
};

export default TeachersList;
