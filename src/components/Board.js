import { useDispatch } from "react-redux";
import { addLetterToCurrentGuess } from "../redux/currentGuessSlice";

export default function Board( { letters } ) {

    const dispatch = useDispatch();

    const hexagonPoints = "120,60 90,112 30,112 0,60 30,8 90,8";

    return <svg width="350" height="350">
        <polygon
            points={ hexagonPoints }
            transform="translate( 100 0 )"
            onClick={ () => dispatch( addLetterToCurrentGuess( letters[ 1 ] ) ) }
        >
        </polygon>
        <text
            className="cell-letter"
            fill="white"
            textAnchor="middle"
            x="160"
            y="82.5"
            onClick={ () => dispatch( addLetterToCurrentGuess( letters[ 1 ] ) ) }
        >
            { letters[ 1 ] }
        </text>
        <polygon
            points={ hexagonPoints }
            transform="translate( 0 60 )"
            onClick={ () => dispatch( addLetterToCurrentGuess( letters[ 2 ] ) ) }
        >
        </polygon>
        <text
            className="cell-letter"
            fill="white"
            textAnchor="middle"
            x="60"
            y="142.5"
            onClick={ () => dispatch( addLetterToCurrentGuess( letters[ 2 ] ) ) }
        >
            { letters[ 2 ] }
        </text>
        <polygon
            points={ hexagonPoints }
            transform="translate( 200 60 )"
            onClick={ () => dispatch( addLetterToCurrentGuess( letters[ 3 ] ) ) }
        >
        </polygon>
        <text
            className="cell-letter"
            fill="white"
            textAnchor="middle"
            x="260"
            y="142.5"
            onClick={ () => dispatch( addLetterToCurrentGuess( letters[ 3 ] ) ) }
        >
            { letters[ 3 ] }
        </text>
        <polygon
            points={ hexagonPoints }
            transform="translate( 100 120 )"
            onClick={ () => dispatch( addLetterToCurrentGuess( letters[ 0 ] ) ) }
        >
        </polygon>
        <text
            className="cell-letter"
            fill="cyan"
            textAnchor="middle"
            x="160"
            y="202.5"
            onClick={ () => dispatch( addLetterToCurrentGuess( letters[ 0 ] ) ) }
        >
            { letters[ 0 ] }
        </text>
        <polygon
            points={ hexagonPoints }
            transform="translate( 0 180 )"
            onClick={ () => dispatch( addLetterToCurrentGuess( letters[ 4 ] ) ) }
        >
        </polygon>
        <text
            className="cell-letter"
            fill="white"
            textAnchor="middle"
            x="60"
            y="262.5"
            onClick={ () => dispatch( addLetterToCurrentGuess( letters[ 4 ] ) ) }
        >
            { letters[ 4 ] }
        </text>
        <polygon
            points={ hexagonPoints }
            transform="translate( 200 180 )"
            onClick={ () => dispatch( addLetterToCurrentGuess( letters[ 5 ] ) ) }
        >
        </polygon>
        <text
            className="cell-letter"
            fill="white"
            textAnchor="middle"
            x="260"
            y="262.5"
            onClick={ () => dispatch( addLetterToCurrentGuess( letters[ 5 ] ) ) }
        >
            { letters[ 5 ] }
        </text>
        <polygon
            points={ hexagonPoints }
            transform="translate( 100 240 )"
            onClick={ () => dispatch( addLetterToCurrentGuess( letters[ 6 ] ) ) }
        >
        </polygon>
        <text
            className="cell-letter"
            fill="white"
            textAnchor="middle"
            x="160"
            y="322.5"
            onClick={ () => dispatch( addLetterToCurrentGuess( letters[ 6 ] ) ) }
        >
            { letters[ 6 ] }
        </text>
    </svg>;

}
