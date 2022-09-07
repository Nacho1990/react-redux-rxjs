import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './states/user';

export const MainStore = configureStore({
  reducer: {
    user: userSlice.reducer
  }
});

export default MainStore;