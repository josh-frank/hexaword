import { createSlice } from "@reduxjs/toolkit";
import { shuffle } from "../utilities/shuffle";

const currentPuzzleSlice = createSlice( {
    name: "currentPuzzle",
    initialState: "",
    reducers: {
      setLetters( state, action ) {
        return action.payload.toUpperCase();
      },
      shuffleLetters( state ) {
        return state[ 0 ] + shuffle( state.slice( 1 ).split( "" ) ).join( "" );
      }
    }
  } );
  
  export const { setLetters, shuffleLetters } = currentPuzzleSlice.actions;
  export default currentPuzzleSlice.reducer;