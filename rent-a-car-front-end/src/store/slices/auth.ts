import { createSlice } from '@reduxjs/toolkit';
interface InitialState {
  token?: string | null;
  user?: any;
  role?: any;
}

const initialState: InitialState = {
  token: window.localStorage.getItem('login_token'),
  user: '',
  role: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authMe: (state) => state,
    setAuthMe: (state, action) => {
      state.user = action.payload.user;
      state.role = action.payload.role;
    },
    getAuthLogin: (state, action) => state,
    setAuthLogin: (state, action) => {
      window.localStorage.setItem('login_token', action.payload.token);
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.role = action.payload.role;
    },
    logout: (state) => {
      window.localStorage.removeItem('login_token');
      state.user = {};
      state.token = '';
    },
  },
});
export const actions = authSlice.actions;
export default authSlice.reducer;
