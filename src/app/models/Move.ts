export default class Move {
    name: string;
    url: string;
    typeOfMove: string;
    levelLearnedAt: number;

    constructor (
        name: string,
        url: string,
        typeOfMove: string,
        levelLearnedAt: number
    ) {
        this.name = name;
        this.url = url;
        this.typeOfMove = typeOfMove;
        this.levelLearnedAt = levelLearnedAt;
    }
}