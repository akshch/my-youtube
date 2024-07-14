import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    videosList: null,
  },
  reducers: {
    addVideos: (state, action) => {
      state.videosList = action.payload;
    },
  },
});

export const { addVideos } = videoSlice.actions;
export default videoSlice.reducer;
