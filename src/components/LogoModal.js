import { useState } from "react";
import { Button, Dimmer, Divider } from "semantic-ui-react";
import HexagonLogo from "./HexagonLogo";

export default function LogoModal( { startGame } ) {

    const [ displayDimmer, toggleDisplayDimmer ] = useState( true );

    return <Dimmer
        page
        inverted
        active={ displayDimmer }
    >
        <HexagonLogo negative={ false }/>
        <Divider hidden />
        <Button 
            color="black"
            onClick={ () => {
                toggleDisplayDimmer( false );
                startGame();
            } }
        >
            Start game
        </Button>
    </Dimmer>;

}
