import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Menu, Modal } from "semantic-ui-react";
import { runTimer, stopTimer } from "../redux/currentTimeSlice";
import HexagonLogo from "./HexagonLogo";

export default function NavBar( { startGame } ) {

    const dispatch = useDispatch();

    const [ displayNewGameModal, toggleDisplayNewGameModal ] = useState( false );

    function openNewGameModal() {
        toggleDisplayNewGameModal( true );
        dispatch( stopTimer() );
    }

    function closeNewGameModal() {
        toggleDisplayNewGameModal( false );
        dispatch( runTimer() );
    }

    const newGameModal = <Modal
        size="mini"
        dimmer="inverted"
        open={ displayNewGameModal }
        onClose={ closeNewGameModal }
        onOpen={ openNewGameModal }
        trigger={ <Button basic inverted>New game</Button> }
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

    return <Menu
        borderless
        inverted
        stackable
        attached="top"
        color="black"
    >
        <Menu.Item><HexagonLogo small negative={ true }/></Menu.Item>
        <Menu.Item position="right">{ newGameModal }</Menu.Item>
    </Menu>;

}