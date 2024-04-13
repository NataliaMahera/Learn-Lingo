import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import auth from '../../firebase';
import { setUser } from '../../redux/auth/authReducer';
import { selectAuthIsLoading } from '../../redux/auth/authSelectors';
import Loader from '../Loader/Loader';
import { useState } from 'react';
import {
  BlockedEyeIcon,
  OpenEyeIcon,
} from '../ReUseComponents/Buttons/Buttons';

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short! At least 2 charackters.')
    .max(20, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email! Example "your@test.com"')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Too Short! At least 6 charackters.')
    .max(20, 'Too Long! Max 20 charackters.')
    .required('Required'),
});
const initialValues = { name: '', email: '', password: '' };

const RegisterModal = ({ closeModal }) => {
  const isLoading = useSelector(selectAuthIsLoading);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegisterSubmit = async (
    { name, email, password },
    { resetForm }
  ) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(user);

      await updateProfile(user, {
        displayName: name,
      });
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
        Registration
      </h1>
      <p className="mb-[40px] text-[16px] leading-[1.37] text-secondary-text-color">
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={RegisterSchema}
        onSubmit={handleRegisterSubmit}
      >
        <Form autoComplete="off" className="flex flex-col gap-[18px]">
          <Field
            type="text"
            name="name"
            placeholder="Name"
            className="input-form"
          />
          <ErrorMessage name="name" component="span" className="errorMsg" />
          <Field
            type="text"
            name="email"
            placeholder="Email"
            className="input-form"
          />
          <ErrorMessage
            name="email"
            component="span"
            className="errorMsg p-[px]"
          />
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
            Sign Up
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default RegisterModal;
