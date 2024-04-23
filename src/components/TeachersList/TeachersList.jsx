import { useEffect, useState } from 'react';
import TeachersItem from '../TeachersItem/TeachersItem';
import {
  endAt,
  onValue,
  orderByKey,
  query,
  ref,
  startAfter,
} from 'firebase/database';
import { db } from '../../firebase';
import { LoadMoreButton } from '../ReUseComponents/Buttons/Buttons';
import { useSelector } from 'react-redux';
import { selectAuthIsLoading } from '../../redux/auth/authSelectors';
import Loader from '../Loader/Loader';
import { toast } from 'react-toastify';
import { styleToastify } from '../Toster/tostify';

const TeachersList = () => {
  const [teachers, setTeachers] = useState([]);
  const [lastKey, setLastKey] = useState('');
  const [loadMoreData, setLoadMoreData] = useState(true);
  const isLoading = useSelector(selectAuthIsLoading);
  const cardLimitOnPage = 4;

  // const getAllTeachersData = async () => {
  //   try {
  //     const dbRef = ref(getDatabase());
  //     const snapshot = await get(child(dbRef, 'teachers/'));
  //     if (snapshot.exists()) {
  //       const allTeachersData = snapshot.val();
  //       setTeachers(allTeachersData);
  //       console.log('allTeachersData: ', allTeachersData);
  //     } else {
  //       console.log('No data available');
  //     }
  //   } catch (error) {
  //     console.error('Error fetching teachers data:', error);
  //   }
  // };

  const initialQuery = query(
    ref(db, 'teachers'),
    orderByKey(),
    endAt(lastKey + 3)
  );

  const getTeachersData = async (queryRef) => {
    try {
      onValue(queryRef, (snapshot) => {
        const newTeacherData = [];
        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          newTeacherData.push({ id: childKey, ...childData });
          setLastKey(childKey);
        });
        setTeachers((prevState) => [...prevState, ...newTeacherData]);
        if (newTeacherData.length < cardLimitOnPage && teachers.length > 0)
          setLoadMoreData(false);
      });
    } catch (error) {
      console.error(error.message);
      toast.error(
        'Oops something went wrong, error fetching teachers',
        styleToastify
      );
    }
  };

  const handleLoadMoreData = () => {
    const nextQuery = query(
      ref(db, 'teachers'),
      orderByKey(),
      startAfter(lastKey),
      endAt(String(Number(lastKey) + 4))
    );
    getTeachersData(nextQuery);
  };

  useEffect(() => {
    getTeachersData(initialQuery);
    // getAllTeachersData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <ul className="flex flex-col w-auto gap-[32px]">
        {teachers.map((teacher) => {
          return <TeachersItem key={teacher.id} teacher={teacher} />;
        })}
      </ul>
      {loadMoreData && teachers.length > 0 && (
        <LoadMoreButton onClick={handleLoadMoreData}>Load More</LoadMoreButton>
      )}
    </>
  );
};

export default TeachersList;
