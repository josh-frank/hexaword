import './App.css';
import Board from './components/Board';
import { dictionary, sevenUniqueLetters } from './assets/dictionary';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLetters, shuffleLetters } from './redux/currentPuzzleSlice';
import { addLetterToCurrentGuess, clearCurrentGuess, removeLastLetterFromCurrentGuess } from './redux/currentGuessSlice';
import GuessField from './components/GuessField';
import { incrementScoreBy } from './redux/currentScoreSlice';
import Score from './components/Score';
import { addToGuesses } from './redux/allGuessesSlice';
import Guesses from './components/Guesses';
import Timer from './components/Timer';

function App() {

  const dispatch = useDispatch();
  const stableDispatch = useCallback( dispatch, [ dispatch ] );

  const currentPuzzle = useSelector( state => state.currentPuzzle );
  const currentGuess = useSelector( state => state.currentGuess );
  const allGuesses = useSelector( state => state.allGuesses );

  const match = `^(?=.*${ currentPuzzle[ 0 ] })[${ currentPuzzle }]{4,}$`;
  const pangram = `^(?=.*${ currentPuzzle[ 0 ] })(?=.*${ currentPuzzle[ 1 ] })(?=.*${ currentPuzzle[ 2 ] })(?=.*${ currentPuzzle[ 3 ] })(?=.*${ currentPuzzle[ 4 ] })(?=.*${ currentPuzzle[ 5 ] })(?=.*${ currentPuzzle[ 6 ] })[${ currentPuzzle }]{4,}$`;
  const possibleWords = dictionary.filter( word => word.search( match ) > -1 );
  const pangrams = dictionary.filter( word => word.search( pangram ) > -1 );  

  useEffect( () => {
    const puzzleLetters = [ ...new Set( sevenUniqueLetters[ Math.floor( Math.random() * sevenUniqueLetters.length ) ].split( "" ) ) ].join( "" );
    stableDispatch( setLetters( puzzleLetters ) );
  }, [ stableDispatch ] );

  const makeGuess = useCallback( () => {
    switch ( true ) {
      case allGuesses.includes( currentGuess ):
        console.log( "Already guessed" );
        break;
      case pangrams.includes( currentGuess ):
        console.log( "Bonus!" );
        stableDispatch( addToGuesses( currentGuess ) );
        stableDispatch( incrementScoreBy( 3 ) );
        break;
      case possibleWords.includes( currentGuess ):
        console.log( "Correct!" );
        stableDispatch( addToGuesses( currentGuess ) );
        stableDispatch( incrementScoreBy( 1 ) );
        break;
      default: console.log( "Not a valid guess" );
    }
    stableDispatch( clearCurrentGuess() );
  }, [ allGuesses, currentGuess, pangrams, possibleWords, stableDispatch ] );

  const handleKeyPress = useCallback( keyPressEvent => {
    if ( currentPuzzle.includes( keyPressEvent.key.toUpperCase() ) ) {
      stableDispatch( addLetterToCurrentGuess( keyPressEvent.key.toUpperCase() ) );
    } else if ( keyPressEvent.key === "Backspace" ) {
      stableDispatch( removeLastLetterFromCurrentGuess() );
    } else if ( keyPressEvent.key === "Enter" ) {
      makeGuess();
    }
  }, [ makeGuess, currentPuzzle, stableDispatch ] );

  useEffect( () => {
    window.addEventListener( "keydown", handleKeyPress );
    return () => window.removeEventListener( "keydown", handleKeyPress );
  }, [ handleKeyPress ] );

  return ( !!currentPuzzle.length &&
    <div className="App">
      <Board letters={ currentPuzzle } />
      <GuessField />
      <Score />
      <Timer />
      <button onClick={ () => dispatch( shuffleLetters() ) }>Shuffle</button>
      <button onClick={ () => dispatch( clearCurrentGuess() ) }>Clear</button>
      <Guesses />
    </div>
  );

}

export default App;
