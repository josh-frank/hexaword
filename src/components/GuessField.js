import { useSelector } from "react-redux";

export default function GuessField() {

    return <h1 className="guess-field">
        { useSelector( state => state.currentGuess ) }
    </h1>;

}
