import { createSlice } from "@reduxjs/toolkit";

const currentPuzzleSlice = createSlice( {
    name: "currentPuzzle",
    initialState: "",
    reducers: {
      setLetters( state, action ) {
        return action.payload.toUpperCase();
      },
      shuffleLetters( state ) {
        const lettersToShuffle = [ ...state.slice( 1 ).split( "" ) ];
        for ( let i = lettersToShuffle.length - 1; i > 0; i-- ) {
            const j = Math.floor( Math.random() * ( i + 1 ) );
            [ lettersToShuffle[ i ], lettersToShuffle[ j ] ] = [ lettersToShuffle[ j ], lettersToShuffle[ i ] ];
        }
        return state[ 0 ] + lettersToShuffle.join( "" );
      }
    }
  } );
  
  export const { setLetters, shuffleLetters } = currentPuzzleSlice.actions;
  export default currentPuzzleSlice.reducer;