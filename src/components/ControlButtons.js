import { useDispatch } from "react-redux";
import { Button, Icon } from "semantic-ui-react";
import { clearCurrentGuess } from "../redux/currentGuessSlice";
import { shuffleLetters } from "../redux/currentPuzzleSlice";

export default function ControlButtons() {

    const dispatch = useDispatch();

    return <Button.Group>
        <Button
            onClick={ () => dispatch( shuffleLetters() ) }
        >
            <Icon name='shuffle' />
            Shuffle
        </Button>
        <Button
            onClick={ () => dispatch( clearCurrentGuess() ) }
        >
            <Icon name='delete' />
            Clear
        </Button>
    </Button.Group>;

}