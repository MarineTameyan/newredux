import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '', 
  description: '', 
  titleColor: 'black',
  descriptionColor: 'black',
  mainBgColor: 'white', 
  titleBgColor: 'white', 
  titleBorderRadius: 0, 
  titleFontSize: 10,
  descriptionFontSize: 10,
};

const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    updateInput: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateInput } = inputSlice.actions;

export default inputSlice.reducer