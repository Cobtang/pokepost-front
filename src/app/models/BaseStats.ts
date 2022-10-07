export default class BaseStats {
    id: number;
    hp: number;
    atk: number;
    def: number;
    spAtk: number;
    spDef: number;
    spd: number;

    constructor (
        id: number,
        hp: number,
        atk: number,
        def: number,
        spAtk: number,
        spDef: number,
        spd: number
    ) {
        this.id = id;
        this.hp = hp;
        this.atk = atk;
        this.def = def;
        this.spAtk = spAtk;
        this.spDef = spDef;
        this.spd = spd;
    }
}