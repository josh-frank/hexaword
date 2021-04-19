import { createSlice } from "@reduxjs/toolkit";

const currentScoreSlice = createSlice( {
    name: "currentScore",
    initialState: { score: 0, total: 0 },
    reducers: {
      moveCurrentScoreToTotalScore( state ) {
        return { score: 0, total: state.score + state.total };
      },
      incrementCurrentScoreBy( state, action ) {
        return { score: state.score + action.payload, total: state.score };
      },
      resetCurrentScoreAndTotal() {
        return { score: 0, total: 0 };
      }
    }
  } );
  
  export const {
    moveCurrentScoreToTotalScore,
    incrementCurrentScoreBy,
    resetCurrentScoreAndTotal
  } = currentScoreSlice.actions;
  export default currentScoreSlice.reducer;