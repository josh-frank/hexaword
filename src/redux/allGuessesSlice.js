import { createSlice } from "@reduxjs/toolkit";

const allGuessesSlice = createSlice( {
    name: "allGuesses",
    initialState: [],
    reducers: {
      addToGuesses( state, action ) {
        return [ ...state, action.payload ];
      },
      resetGuesses() {
        return [];
      }
    }
  } );
  
  export const { addToGuesses, resetGuesses } = allGuessesSlice.actions;
  export default allGuessesSlice.reducer;