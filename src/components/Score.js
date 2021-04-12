import { useSelector } from "react-redux";

export default function Score() {

    return <h1 className="score">
        Score: { useSelector( state => state.currentScore ) }
    </h1>;

}