import { useSelector } from "react-redux";
import { Grid, Header, List } from "semantic-ui-react";

function eachSlice( array, size ) {
    const result = [];
    for ( let i = 0, l = array.length; i < l; i += size ) { result.push( array.slice( i, i + size ) ); }
    return result;
};

export default function Guesses() {

    const guesses = useSelector( state => state.allGuesses );
    const guessSlices = eachSlice( guesses, 11 );

    return <>
        <Header>You've guessed { guesses.length } { guesses.length === 1 ? "word" : "words" }</Header>
        <Grid columns={ guessSlices.length ? guessSlices.length : 1 }>
            <Grid.Row>
                { guessSlices.map( ( guessSlice, index ) => {
                    return <Grid.Column key={ index }>
                        <List size="huge">
                            { guessSlice.map( guess => <List.Item key={ guess }>{ guess }</List.Item> ) }
                        </List>
                    </Grid.Column>;
                } ) }
            </Grid.Row>
        </Grid>
    </>;

}