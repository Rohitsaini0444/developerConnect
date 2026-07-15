import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: [],
  reducers: {
    setFeed: (state, action) => {
        return action.payload;
    },
    addPost: (state, action) => {
        state.unshift(action.payload);
    },
    removePost: (state, action) => {
        return state.filter(post => post._id !== action.payload);
    }
  }
});

export const { setFeed, addPost, removePost } = feedSlice.actions;
export default feedSlice.reducer;