import { useSelector } from "react-redux";
import { Header } from "semantic-ui-react";

export default function GuessField() {

    return <Header
        className="guess-field"
        style={ { alignSelf: "center", fontSize: "5rem" } }
    >
        { useSelector( state => state.currentGuess ) }
    </Header>;

}
