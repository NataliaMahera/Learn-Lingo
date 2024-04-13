import { signInWithEmailAndPassword } from 'firebase/auth';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import auth from '../../firebase';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../redux/auth/authReducer';
import { selectAuthIsLoading } from '../../redux/auth/authSelectors';
import { useState } from 'react';
import Loader from '../Loader/Loader';
import {
  BlockedEyeIcon,
  OpenEyeIcon,
} from '../ReUseComponents/Buttons/Buttons';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email! Example "your@test.com"')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Too Short! At least 6 charackters.')
    .max(20, 'Too Long! Max 20 charackters.')
    .required('Required'),
});

const initialValues = { email: '', password: '' };

const LoginModal = ({ closeModal }) => {
  const isLoading = useSelector(selectAuthIsLoading);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLoginSubmit = async ({ email, password }, { resetForm }) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      dispatch(setUser(user));
      resetForm();
      closeModal();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <h1 className="mb-[20px] text-[40px] leading-[1.2] font-medium text-primary-text-color">
        Log In
      </h1>
      <p className="mb-[40px] text-[16px] leading-[1.37] text-secondary-text-color">
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={handleLoginSubmit}
      >
        <Form autoComplete="off" className="flex flex-col gap-[18px]">
          <Field
            type="text"
            name="email"
            placeholder="Email"
            className="input-form"
          />
          <ErrorMessage name="email" component="span" className="errorMsg" />
          <div className="relative">
            <Field
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              className="input-form  "
            />
            {showPassword ? (
              <OpenEyeIcon
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              />
            ) : (
              <BlockedEyeIcon
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              />
            )}
          </div>
          <ErrorMessage name="password" component="span" className="errorMsg" />
          <button
            type="submit"
            className="text-[18px] leading-[1.56] font-bold mt-[22px] bg-accent-color p-y-[16px] w-full text-primary-text-color h-[60px] rounded-[12px] outline-none"
          >
            Log In
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default LoginModal;
