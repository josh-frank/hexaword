import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementTime } from "../redux/currentTimeSlice";

export default function Timer() {

    const dispatch = useDispatch();

    const currentTime = useSelector( state => state.currentTime );

    useEffect( () => {
        const timer = setInterval( () => dispatch( decrementTime() ), 1000 );
        return () => clearInterval( timer );
      }, [ dispatch ] );

    return <div className="timer">
        <span>
            { Math.floor( currentTime.clock / 60 ) }
        </span>
        :
        <span>
            { ( "0" + ( currentTime.clock % 60 ) ).slice( -2 ) }
        </span>
    </div>;

}