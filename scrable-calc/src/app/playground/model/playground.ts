export class PlayGround{
    letter1: string;
    letter2: string;
    letter3: string;
    letter4: string;
    letter5: string;
    letter6: string;
    letter7: string;
    letter8: string;
    letter9: string;
    letter10: string;
    constructor( letter1: string,
        letter2: string,
        letter3: string,
        letter4: string,
        letter5: string,
        letter6: string,
        letter7: string,
        letter8: string,
        letter9: string,
        letter10: string) {
            this.letter1 = letter1;
            this.letter2 = letter2;
            this.letter3 = letter3;
            this.letter4 = letter4;
            this.letter5 = letter5;
            this.letter6 = letter6;
            this.letter7 = letter7;
            this.letter8 = letter8;
            this.letter9 = letter9;
            this.letter10 = letter10;
    }

    static createEmptyModel(): PlayGround {
        return {
            letter1: '',
            letter2: '',
            letter3: '',
            letter4: '',
            letter5: '',
            letter6: '',
            letter7: '',
            letter8: '',
            letter9: '',
            letter10: ''
       };
      }
}