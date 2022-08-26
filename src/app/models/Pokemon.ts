import Ability from './Ability';
import PokemonMoves from './PokemonMoves';

export default class Pokemon {
    id?: number;
    name?: string;
    height?: number;
    weight?: number;
    types?: string[];
    baseStats?: Map<string, number>;
    imageUrl?: string;
    generation?: number;
    category?: string;
    description?: string;
    evolutionChain?: string[];
    locationVersions?: Map<string, number>[];
    baseExperience?: number;
    abilities?: Ability[];
    moves?: PokemonMoves;

    constructor (
        id: number,
        name: string,
        height: number,
        weight: number,
        types: string[],
        baseStats: Map<string, number>,
        imageUrl: string,
        generation: number,
        category: string,
        description: string,
        evolutionChain: string[],
        locationVersions: Map<string, number>[],
        baseExperience: number,
        abilities: Ability[],
        moves: PokemonMoves
    ) {
        this.id = id;
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.types = types;
        this.baseStats = baseStats;
        this.imageUrl = imageUrl;
        this.generation = generation;
        this.category = category;
        this.description = description;
        this.evolutionChain = evolutionChain;
        this.locationVersions = locationVersions;
        this.baseExperience = baseExperience;
        this.abilities = abilities;
        this.moves = moves;
    }
}