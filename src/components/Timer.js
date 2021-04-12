import { useEffect, useState } from "react";

export default function Timer() {

    const [ time, setTime ] = useState( 0 );

    useEffect( () => {
        const timer = setInterval( () => setTime( time => time + 1 ), 1000 );
        return () => clearInterval( timer );
      }, [] );

    return <div className="timer">
        <span>
            { Math.floor( time / 60 ) }
        </span>
        :
        <span>
            { ( "0" + ( time % 60 ) ).slice( -2 ) }
        </span>
    </div>;

}