import { createSlice } from "@reduxjs/toolkit";

const allGuessesSlice = createSlice( {
    name: "allGuesses",
    initialState: [],
    reducers: {
      addToGuesses( state, action ) {
        return [ ...state, action.payload ];
      }
    }
  } );
  
  export const { addToGuesses } = allGuessesSlice.actions;
  export default allGuessesSlice.reducer;