import { nanoid } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';
import TeachersItem from './TeachersItem/TeachersItem';
import { child, get, getDatabase, ref } from 'firebase/database';

const TeachersList = () => {
  const [teachers, setTeachers] = useState([]);

  const getTeachersData = async () => {
    try {
      const dbRef = ref(getDatabase());
      const snapshot = await get(child(dbRef, 'teachers/'));
      if (snapshot.exists()) {
        const teachersData = snapshot.val();
        setTeachers(teachersData);
        console.log('teachersData: ', teachersData);
      } else {
        console.log('No data available');
      }
    } catch (error) {
      console.error('Error fetching teachers data:', error);
    }
  };

  useEffect(() => {
    getTeachersData();
  }, []);

  return (
    <>
      <ul className="">
        {teachers.map((teacher) => {
          const id = nanoid();
          return <TeachersItem key={id} data={teacher} />;
        })}
      </ul>
      {/* {teachers.length > 0 && ( // Перевірити, чи масив teachers має елементи
        <ul className="">
          {teachers.map((teacher) => (
            <TeachersItem key={nanoid()} data={teacher} />
          ))}
        </ul>
      )}
      {!teachers.length && <p>Завантажуються вчителі...</p>} */}
    </>
  );
};

export default TeachersList;
