import { createSlice } from "@reduxjs/toolkit";

const currentGuessSlice = createSlice( {
    name: "currentGuess",
    initialState: "",
    reducers: {
      addLetterToCurrentGuess( state, action ) {
        return state + action.payload;
      },
      removeLastLetterFromCurrentGuess( state ) {
        return state.slice( 0, -1 );
      },
      clearCurrentGuess() {
        return "";
      }
    }
  } );
  
  export const { addLetterToCurrentGuess, removeLastLetterFromCurrentGuess, clearCurrentGuess } = currentGuessSlice.actions;
  export default currentGuessSlice.reducer;