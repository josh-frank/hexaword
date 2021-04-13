import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Menu, Modal } from "semantic-ui-react";
import { sevenUniqueLetters } from '../assets/dictionary';
import { setLetters } from "../redux/currentPuzzleSlice";
import { resetGuesses } from "../redux/allGuessesSlice";
import { clearCurrentGuess } from "../redux/currentGuessSlice";
import { clearTime } from "../redux/currentTimeSlice";
import { resetScore } from "../redux/currentScoreSlice";

export default function NavBar() {

    const dispatch = useDispatch();

    const [ displayNewGameModal, toggleDisplayNewGameModal ] = useState( false );

    const newGameModal = <Modal
        size="mini"
        dimmer="inverted"
        open={ displayNewGameModal }
        onClose={ () => toggleDisplayNewGameModal( false ) }
        onOpen={ () => toggleDisplayNewGameModal( true ) }
        trigger={ <Button basic inverted>New game</Button> }
    >
        <Modal.Header>Are you sure you want to discard this game and start a new one?</Modal.Header>
        <Modal.Actions>
            <Button negative onClick={ () => toggleDisplayNewGameModal( false ) }>
                Continue game
            </Button>
            <Button positive onClick={ startNewGame }>
                Start new game
            </Button>
        </Modal.Actions>
    </Modal>;

    function startNewGame() {
        const newPuzzleLetters = [ ...new Set( sevenUniqueLetters[ Math.floor( Math.random() * sevenUniqueLetters.length ) ].split( "" ) ) ].join( "" );
        dispatch( setLetters( newPuzzleLetters ) );
        dispatch( clearCurrentGuess() );
        dispatch( resetGuesses() );
        dispatch( resetScore() );
        dispatch( clearTime() );
        toggleDisplayNewGameModal( false );
    }

    return <>
        <Menu
            borderless
            inverted
            stackable
            attached="top"
            color="black"
        >
            <Menu.Item position="right">{ newGameModal }</Menu.Item>
        </Menu>
    </>;

}