import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { managerStatus: -1 },
  reducers: {
    getManagerStatus: () => { },

    setManagerStatus: (state, action) => {
      const {isManager} = action.payload;
      state.managerStatus= isManager;
    },
  },
});

export const { getManagerStatus, setManagerStatus } = userSlice.actions;
export default userSlice.reducer;
