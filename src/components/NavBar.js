import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Header, Icon, Menu, Modal } from "semantic-ui-react";
import { runTimer, stopTimer } from "../redux/currentTimeSlice";
import HexagonLogo from "./HexagonLogo";

export default function NavBar( { startGame } ) {

    const dispatch = useDispatch();

    const currentScore = useSelector( state => state.currentScore );

    const [ displayNewGameModal, toggleDisplayNewGameModal ] = useState( false );
    const [ displayPauseModal, toggleDisplayPauseModal ] = useState( false );
    const [ displayAboutModal, toggleDisplayAboutModal ] = useState( false );

    function openNewGameModal() {
        toggleDisplayNewGameModal( true );
        dispatch( stopTimer() );
    }

    function closeNewGameModal() {
        toggleDisplayNewGameModal( false );
        dispatch( runTimer() );
    }

    function openPauseModal() {
        toggleDisplayPauseModal( true );
        dispatch( stopTimer() );
    }

    function closePauseModal() {
        toggleDisplayPauseModal( false );
        dispatch( runTimer() );
    }

    function openAboutModal() {
        toggleDisplayAboutModal( true );
        dispatch( stopTimer() );
    }

    function closeAboutModal() {
        toggleDisplayAboutModal( false );
        dispatch( runTimer() );
    }

    function AboutModal() {
        return <Modal
            size="mini"
            dimmer="inverted"
            open={ displayAboutModal }
            onClose={ closeAboutModal }
            onOpen={ openAboutModal }
            trigger={ <Button secondary>About</Button> }
        >
            <Modal.Content align="center">
                <HexagonLogo text="HEXAWORD" size="80%" />
                <Header>by <a href="https://josh-frank.netlify.app/" target="_blank" rel="noreferrer">Josh Frank</a></Header>
                <p>Guess as many words as you can using the letters in the hexagons! Your guess must include the letter in the center cell and must be at least four letters long.</p>
                <a href="https://www.linkedin.com/in/josh-frank-10018997/" target="_blank" rel="noreferrer">
                    <Icon name="linkedin" size="big" />
                </a>
                <a href="https://github.com/josh-frank/hexaword" target="_blank" rel="noreferrer">
                    <Icon name="github square" size="big" />
                </a>
                <a href="https://joshgoestoflatiron.medium.com/" target="_blank" rel="noreferrer">
                    <Icon name="medium" size="big" />
                </a>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={ closeAboutModal }>
                    Back to game
                </Button>
            </Modal.Actions>
        </Modal>;
    }

    function PauseGameModal() {
        return <Modal
            size="mini"
            dimmer="inverted"
            open={ displayPauseModal }
            onClose={ closePauseModal }
            onOpen={ openPauseModal }
            trigger={ <Button secondary>Pause game</Button> }
        >
            <Modal.Header>Game paused</Modal.Header>
            <Modal.Actions>
                <Button positive onClick={ closePauseModal }>Resume game</Button>
            </Modal.Actions>
        </Modal>;
    }

    function NewGameModal() {
        return <Modal
            size="mini"
            dimmer="inverted"
            open={ displayNewGameModal }
            onClose={ closeNewGameModal }
            onOpen={ openNewGameModal }
            trigger={ <Button secondary>New game</Button> }
        >
            <Modal.Header>Are you sure you want to discard this game and start a new one?</Modal.Header>
            <Modal.Actions>
                <Button negative onClick={ closeNewGameModal }>
                    Continue game
                </Button>
                <Button positive onClick={ () => {
                    closeNewGameModal();
                    startGame();
                } }>
                    Start new game
                </Button>
            </Modal.Actions>
        </Modal>;
    }

    return <Menu
        borderless
        inverted
        stackable
        attached="top"
        color="black"
    >
        <Menu.Item><HexagonLogo text="HEXAWORD" size="50%" negative={ true }/></Menu.Item>
        <Menu.Item>Total: { currentScore.total }</Menu.Item>
        <Menu.Item position="right">
            <AboutModal />
            <PauseGameModal />
            <NewGameModal />
        </Menu.Item>
    </Menu>;

}