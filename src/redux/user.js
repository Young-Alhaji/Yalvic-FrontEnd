import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    profilePicture: "",
    token: "",
  },
  reducers: {
    setusername: (state, action) => {
      state.username = action.payload;
    },
    setprofilePicture: (state, action) => {
      state.profilePicture = action.payload;
    },
    settoken: (state, action) => {
      state.token = action.payload;
    },
  },
});
export const { setusername, setprofilePicture, settoken } = userSlice.actions;
export default userSlice.reducer;
