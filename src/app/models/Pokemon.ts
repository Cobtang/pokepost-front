import Ability from './Ability';
import BaseStats from './BaseStats';
import PokemonMoves from './PokemonMoves';

export default class Pokemon {
    id?: number;
    name?: string;
    heightInFeetInches?: string;
    weightInPoundsString?: string;
    primaryType: string;
    secondaryType: string;
    baseStats: BaseStats;
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
        heightInFeetInches: string,
        weightInPoundsString: string,
        primaryType: string,
        secondaryType: string,
        baseStats: BaseStats,
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
        this.heightInFeetInches = heightInFeetInches;
        this.weightInPoundsString = weightInPoundsString;
        this.primaryType = primaryType;
        this.secondaryType = secondaryType;
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