import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { managerStatus: -1 },
  reducers: {
    getManagerStatus: () => { },

    setManagerStatus: (state, action) => {
      const { isManager } = action.payload;
      const userData = { managerStatus: isManager };
      return { ...state, ...userData };
    },
  },
});

export const { getManagerStatus, setManagerStatus } = userSlice.actions;
export default userSlice.reducer;
