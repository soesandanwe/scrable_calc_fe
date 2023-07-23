export class Letter{
    letter: string;
    point: number;
    constructor( letter: string,
        point: number) {
            this.letter = letter;
            this.point = point;
    }

    static createEmptyModel(): Letter {
        return {
            letter: '',
            point: 0
       };
      }
}