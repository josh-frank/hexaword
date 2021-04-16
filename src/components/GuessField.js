import { useSelector } from "react-redux";
import { Header } from "semantic-ui-react";

export default function GuessField() {

    const currentGuess = useSelector( state => state.currentGuess );

    return <Header
        className="guess-field"
        style={ { alignSelf: "center", fontSize: !currentGuess.length ? "2rem" : "5rem" } }
    >
        { !currentGuess.length ? "Type to enter a guess!" : currentGuess }
    </Header>;

}
