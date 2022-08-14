export default class Ability {
    name: string;
    url: string;
    slot: number;
    isHidden: boolean;

    constructor (
        name: string, 
        url: string, 
        slot: number, 
        isHidden: boolean
    ) {
        this.name = name;
        this.url = url;
        this.slot = slot;
        this.isHidden = isHidden;
    }
}