import { useSelector } from "react-redux";

export default function Guesses() {

    return <ul>
        { useSelector( state => state.allGuesses ).map( guess => {
            return <li key={ guess }>{ guess }</li>;
        } ) }
    </ul>;

}