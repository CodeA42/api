import { FC, PropsWithChildren, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { AuthProps } from 'types/authTypes';
import styles from './authContainerStyles';
import { RootState } from 'store';

const AuthContainer: FC<PropsWithChildren<AuthProps>> = ({
  title,
  children,
  link,
  buttonText,
  onSubmit,
}) => {
  const { Layout } = styles();
  const navigate = useNavigate();
  const logged = useSelector((state: RootState) => Boolean(state.auth.token));

  useEffect(() => {
    if (logged) navigate('/');
  }, [logged, navigate]);

  return (
    <Box className={Layout}>
      <Paper style={{ borderRadius: '20px' }}>
        <Box padding="30px">
          <Box>
            <Box mb="20px">
              <Typography variant="h5" color="primary" fontWeight={600}>
                {title}
              </Typography>
            </Box>
            {children}
          </Box>
          <Stack direction="row-reverse" spacing={2}>
            <Button
              variant="contained"
              onClick={onSubmit}
              style={{ marginBottom: link && '30px' }}>
              {buttonText}
            </Button>
          </Stack>
          {link && (
            <Link to={link.url} style={{ textDecoration: 'none' }}>
              <Typography color="primary">{link.text}</Typography>
            </Link>
          )}
        </Box>
      </Paper>
    </Box>
  );
};
export default AuthContainer;
