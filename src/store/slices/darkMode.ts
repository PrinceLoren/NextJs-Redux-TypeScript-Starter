import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

interface DarkModeState {
  isDarkMode: boolean;
}

const initialState: DarkModeState = {
  isDarkMode: false,
};

export const darkmodeSlice = createSlice({
  name: 'darkmode',
  initialState,
  reducers: {
    // Action to toggle dark mode
    toggleDarkMode: (state) => ({ isDarkMode: !state.isDarkMode }),
  },
  extraReducers: (builder) => {
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    builder.addCase(HYDRATE, (state, action: any) => {
      return {
        ...state,
        ...action.payload.darkMode,
      };
    });
  },
});

export const { toggleDarkMode } =
  darkmodeSlice.actions;

export default darkmodeSlice.reducer;
