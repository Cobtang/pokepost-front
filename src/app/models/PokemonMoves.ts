import Move from './Move';

export default class PokemonMoves {
    levelMoves: Move[];
    eggMoves: Move[];
    tutorMoves: Move[];
    machineMoves: Move[];
    otherMoves: Move[];

    constructor(
        levelMoves: Move[],
        eggMoves: Move[],
        tutorMoves: Move[],
        machineMoves: Move[],
        otherMoves: Move[]
    ) {
        this.levelMoves = levelMoves;
        this.eggMoves = eggMoves;
        this.tutorMoves = tutorMoves;
        this.machineMoves = machineMoves;
        this.otherMoves = otherMoves;
    }
}
