import { configureStore } from "@reduxjs/toolkit";
import setCurrentPuzzleReducer from "./currentPuzzleSlice";
import setCurrentGuessReducer from "./currentGuessSlice";
import setAllGuessesReducer from "./allGuessesSlice";
import currentScoreReducer from "./currentScoreSlice";

const store = configureStore( {
    reducer: {
        currentPuzzle: setCurrentPuzzleReducer,
        currentGuess: setCurrentGuessReducer,
        allGuesses: setAllGuessesReducer,
        currentScore: currentScoreReducer
    }
  } );

export default store;
