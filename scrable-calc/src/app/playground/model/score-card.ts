export class ScoreCard{
    id: number;
    word: string;
    point: number;
    created_date: Date;
    constructor( id: number,
        word: string,
        point: number,
        created_date: Date) {
            this.id = id;
            this.word = word;
            this.point = point;
            this.created_date = created_date;
    }

    static createEmptyModel(): ScoreCard {
        return {
            id: 0,
            word: "",
            point: 0,
            created_date: null as any
       };
      }
}