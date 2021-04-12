import { createSlice } from "@reduxjs/toolkit";

const currentScoreSlice = createSlice( {
    name: "currentScore",
    initialState: 0,
    reducers: {
      incrementScoreBy( state, action ) {
        return state + action.payload;
      }
    }
  } );
  
  export const { incrementScoreBy } = currentScoreSlice.actions;
  export default currentScoreSlice.reducer;