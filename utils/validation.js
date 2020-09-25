import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  first_name: Yup.string().required('First name is required!'),
  last_name: Yup.string().required('Last name is required!'),
  email: Yup.string().email('Invalid email!').required('Email is required!'),
  city: Yup.string().required('Country is Required!'),
  phone: Yup.string()
    .matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/, {
      message: 'Invalid phone number, exclude country code!',
    })
    .required('Phone number is required!'),
  password: Yup.string()
    .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, {
      message:
        ' Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character',
    })
    .required('Password is Required!'),
  password2: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords do not match!')
    .required('Password confirm is required!'),
});

export const SignInSchema = Yup.object().shape({
  username: Yup.string().required('Username is required!'),
  password: Yup.string().required('Password is required!'),
});
