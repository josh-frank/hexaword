import { useSelector } from "react-redux";

export default function Guesses() {

    const guesses = useSelector( state => state.allGuesses );

    return <>
        <p>You've guessed { guesses.length } { guesses.length === 1 ? "word" : "words" }</p>
        <ul>
            { guesses.map( guess => <li key={ guess }>{ guess }</li> ) }
        </ul>
    </>;

}