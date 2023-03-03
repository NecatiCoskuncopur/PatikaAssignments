import { configureStore } from '@reduxjs/toolkit';

import words from './WordSlice';

export const store = configureStore({
  reducer: {
    words: words,
  },
});
