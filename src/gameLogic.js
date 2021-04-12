import { dictionary } from './assets/dictionary';

class Puzzle {

    constructor( letters ) {
        this.letters = letters.toUpperCase();
        this.guesses = [];
        this.match = `^(?=.*${ letters.toUpperCase()[ 0 ] })[${ letters.toUpperCase() }]{4,}$`
        this.pangram = `^(?=.*${ letters.toUpperCase()[ 0 ] })(?=.*${ letters.toUpperCase()[ 1 ] })(?=.*${ letters.toUpperCase()[ 2 ] })(?=.*${ letters.toUpperCase()[ 3 ] })(?=.*${ letters.toUpperCase()[ 4 ] })(?=.*${ letters.toUpperCase()[ 5 ] })(?=.*${ letters.toUpperCase()[ 6 ] })[${ letters.toUpperCase() }]{4,}$`
    }

    shuffleLetters() {
        const lettersToShuffle = [ ...this.letters.slice( 1 ).split( "" ) ];
        for ( let i = lettersToShuffle.length - 1; i > 0; i-- ) {
            const j = Math.floor( Math.random() * ( i + 1 ) );
            [ lettersToShuffle[ i ], lettersToShuffle[ j ] ] = [ lettersToShuffle[ j ], lettersToShuffle[ i ] ];
        }
        this.letters = this.letters[ 0 ] + lettersToShuffle.join( "" );
    }

    possibleWords() { return dictionary.filter( word => word.search( this.match ) > -1 ); }

    pangrams() { return dictionary.filter( word => word.search( this.pangram ) > -1 ); }

    isCorrect( guess ) { return this.possibleWords().includes( guess ); }

    getsBonus( guess ) { return this.pangrams().includes( guess ); }

    wasAlreadyGuessed( guess ) { this.guesses.includes( guess ); }

}

export { Puzzle };
