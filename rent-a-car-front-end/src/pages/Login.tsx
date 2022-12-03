import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, FormLabel } from '@mui/material';
import { LoginProps } from 'types/authTypes';
import l from 'helpers/l';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { actions } from 'store/slices/auth';
import TextField from 'components/TextField/TextField';
import AuthContainer from 'components/AuthContainer/AuthContainer';

const initialValues: LoginProps = {
  username: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3)
    .max(30)
    .matches(/^[A-Za-z0-9._-]*$/, 'Please enter a valid username.')
    .required('Required'),
  password: Yup.string().required('Required'),
});

const link = { url: '/forgotten-password', text: 'Forgotten password' };

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: false,
    onSubmit: (values: LoginProps) => {
      dispatch(actions.getAuthLogin({ ...values, navigate }));
    },
  });

  return (
    <AuthContainer
      title={l('UI_LABELS.LOGIN')}
      link={link}
      buttonText={l('UI_LABELS.LOGIN')}
      onSubmit={formik.submitForm}>
      <Box mb="10px">
        <FormLabel>{l('USERNAME')}</FormLabel>
        <TextField
          name="username"
          fullWidth
          size="small"
          value={formik.values.username}
          onChange={formik.handleChange}
          autoComplete={'off'}
          error={Boolean(formik.errors.username)}
          helperText={formik.errors.username}
          pressEnter={formik.submitForm}
        />
        <FormLabel>{l('PASSWORD')}</FormLabel>
        <TextField
          name="password"
          type="password"
          fullWidth
          size="small"
          value={formik.values.password}
          onChange={formik.handleChange}
          autoComplete={'off'}
          error={Boolean(formik.errors.password)}
          helperText={formik.errors.password}
          pressEnter={formik.submitForm}
        />
      </Box>
    </AuthContainer>
  );
};
export default Login;
