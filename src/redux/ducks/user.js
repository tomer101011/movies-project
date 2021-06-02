import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {isManager: -1},
  reducers: {
    getManagerStatus: () => {},

    setManagerStatus: (state, action) => {
      const {isManager} = action.payload;
      const userData = {isManager};
      return {...state, ...userData};
    },
  },
});

export const {getManagerStatus, setManagerStatus} = userSlice.actions;
export default userSlice.reducer;
