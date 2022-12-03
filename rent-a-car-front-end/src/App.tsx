import { useEffect, useState } from 'react';
import './App.css';
import { Box } from '@mui/material';
import AppRoutes from 'AppRoutes';
import styles from 'styles/main';
import { useLocation, useNavigate } from 'react-router-dom';
import { RootState } from 'store';
import { useSelector } from 'react-redux';

const authPaths = [
  '/login',
  '/forgotten-password',
  '/reset-password',
  '/set-password',
];
function App() {
  const { root } = styles();
  const [height, setHeight] = useState<string>('unset');
  const location = useLocation();
  const navigate = useNavigate();
  const logged = useSelector((state: RootState) => Boolean(state.auth.token));

  useEffect(() => {
    if (!authPaths.includes(location.pathname) && !logged) navigate('/login');
  }, [location.pathname, logged, navigate]);

  return (
    <Box className={root + ' appMainWrapper'}>
      <Box className="appRoutesWrapper" height={height}>
        <AppRoutes />
      </Box>
    </Box>
  );
}

export default App;
