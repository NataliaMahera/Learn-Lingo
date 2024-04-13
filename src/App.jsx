import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import Layout from './components/Layout/Layout';
import { ToastContainer } from 'react-toastify';
import { onAuthStateChanged } from 'firebase/auth';
import auth from './firebase';
import { removeUser, setUser } from './redux/auth/authReducer';
import { useDispatch } from 'react-redux';

const Home = lazy(() => import('./pages/Home/Home'));
const Teachers = lazy(() => import('./pages/Teachers/Teachers'));
const Favorites = lazy(() => import('./pages/Favorites/Favorites'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log(currentUser);
        dispatch(
          setUser({
            email: currentUser.email,
            id: currentUser.uid,
            token: currentUser.accessToken,
          })
        );
      } else {
        dispatch(removeUser(currentUser));
      }
    });

  }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ToastContainer />
    </Layout>
  );
}
export default App;
