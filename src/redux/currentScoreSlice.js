import { createSlice } from "@reduxjs/toolkit";

const currentScoreSlice = createSlice( {
    name: "currentScore",
    initialState: 0,
    reducers: {
      incrementScoreBy( state, action ) {
        return state + action.payload;
      },
      resetScore() {
        return 0;
      }
    }
  } );
  
  export const { incrementScoreBy, resetScore } = currentScoreSlice.actions;
  export default currentScoreSlice.reducer;