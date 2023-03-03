import { createSlice } from '@reduxjs/toolkit';
import { help } from './helpMarkdown'
export const textSlice = createSlice({
  name: 'text',
  initialState: {
    content: 'this is user input',
    textHelp: help,
    toggle: false,
  },
  reducers: {
    changeText: (state, action) => {
      state.content = action.payload;
    },
    toggle: (state) => {
      state.toggle = !state.toggle
    }
  }
})

export const { changeText, toggle } = textSlice.actions;
export default textSlice.reducer;
