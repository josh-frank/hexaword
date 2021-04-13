import './App.css';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLetters } from './redux/currentPuzzleSlice';
import { addLetterToCurrentGuess, clearCurrentGuess, removeLastLetterFromCurrentGuess } from './redux/currentGuessSlice';
import { incrementScoreBy, resetScore } from './redux/currentScoreSlice';
import { addToGuesses, resetGuesses } from './redux/allGuessesSlice';
import { clearTime, runTimer } from './redux/currentTimeSlice';
import { Container, Grid } from 'semantic-ui-react';
import Board from './components/Board';
import GuessField from './components/GuessField';
import Score from './components/Score';
import Guesses from './components/Guesses';
import Timer from './components/Timer';
import NavBar from './components/NavBar';
import ControlButtons from './components/ControlButtons';
import LogoModal from './components/LogoModal';
import { dictionary, sevenUniqueLetters } from './assets/dictionary';
import { shuffle } from './utilities/shuffle';

function App() {

  const dispatch = useDispatch();

  const currentPuzzle = useSelector( state => state.currentPuzzle );
  const currentGuess = useSelector( state => state.currentGuess );
  const allGuesses = useSelector( state => state.allGuesses );

  const match = `^(?=.*${ currentPuzzle[ 0 ] })[${ currentPuzzle }]{4,}$`;
  const pangram = `^(?=.*${ currentPuzzle[ 0 ] })(?=.*${ currentPuzzle[ 1 ] })(?=.*${ currentPuzzle[ 2 ] })(?=.*${ currentPuzzle[ 3 ] })(?=.*${ currentPuzzle[ 4 ] })(?=.*${ currentPuzzle[ 5 ] })(?=.*${ currentPuzzle[ 6 ] })[${ currentPuzzle }]{4,}$`;
  const possibleWords = dictionary.filter( word => word.search( match ) > -1 );
  const pangrams = dictionary.filter( word => word.search( pangram ) > -1 );

  const startGame = useCallback( () => {
    const puzzleLetters = [ ...new Set( sevenUniqueLetters[ Math.floor( Math.random() * sevenUniqueLetters.length ) ].split( "" ) ) ].join( "" );
    // dispatch( setLetters( puzzleLetters ) );
    dispatch( setLetters( shuffle( puzzleLetters.split( "" ) ).join( "" ) ) );
    dispatch( clearCurrentGuess() );
    dispatch( resetGuesses() );
    dispatch( resetScore() );
    dispatch( clearTime() );
    dispatch( runTimer() );
  }, [ dispatch ] );

  const makeGuess = useCallback( () => {
    switch ( true ) {
      case allGuesses.includes( currentGuess ):
        console.log( "Already guessed" );
        break;
      case pangrams.includes( currentGuess ):
        console.log( "Bonus!" );
        dispatch( addToGuesses( currentGuess ) );
        dispatch( incrementScoreBy( currentGuess.length * 2 ) );
        break;
      case possibleWords.includes( currentGuess ):
        console.log( "Correct!" );
        dispatch( addToGuesses( currentGuess ) );
        dispatch( incrementScoreBy( currentGuess.length ) );
        break;
      default: console.log( "Not a valid guess" );
    }
    dispatch( clearCurrentGuess() );
  }, [ allGuesses, currentGuess, pangrams, possibleWords, dispatch ] );

  const handleKeyPress = useCallback( keyPressEvent => {
    if ( currentPuzzle.includes( keyPressEvent.key.toUpperCase() ) ) {
      dispatch( addLetterToCurrentGuess( keyPressEvent.key.toUpperCase() ) );
    } else if ( keyPressEvent.key === "Backspace" ) {
      dispatch( removeLastLetterFromCurrentGuess() );
    } else if ( keyPressEvent.key === "Enter" ) {
      makeGuess();
    }
  }, [ makeGuess, currentPuzzle, dispatch ] );

  useEffect( () => {
    window.addEventListener( "keydown", handleKeyPress );
    return () => window.removeEventListener( "keydown", handleKeyPress );
  }, [ handleKeyPress ] );

  return <div className="App">
    <LogoModal startGame={ startGame } />
    <NavBar startGame={ startGame } />
    <Container style={ { marginTop: "25px" } }>
      <Grid columns={ 3 }>
        <Grid.Row>
          <Grid.Column width={ 4 } textAlign="center">
            <Timer />
            <Score highestPossibleScore={ possibleWords.join( "" ).length + pangrams.join( "" ).length } />
            <ControlButtons />
          </Grid.Column>
          <Grid.Column width={ 6 }>
            <Board letters={ currentPuzzle } />
          </Grid.Column>
          <Grid.Column width={ 6 }>
            <Guesses />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <GuessField />
        </Grid.Row>
      </Grid>
    </Container>
  </div>;

}

export default App;
