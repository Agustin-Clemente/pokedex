import { PokemonDetails } from "../types/types";
import { formatName } from "../utils/utils";

export async function fetchPokemon(name:string): Promise<PokemonDetails> {
    //const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${formatName(name)}`) 
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`) 

    if (!response.ok) {
        throw new Error(`Error fetching ${name}`);
        
    }

    const result = await response.json();

    const pokemon = {
        name: result.name,
        id : result.id,
        imgSrc: result.sprites.front_default,
        hp: result.stats[0].base_stat,
        attack: result.stats[1].base_stat,
        defense: result.stats[2].base_stat

    }
    
        if (pokemon.name.includes("lurantis-totem")){
        pokemon.imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/754.png`
    }else if (pokemon.name.includes("salazzle-totem")){
        pokemon.imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/758.png`
    }else if (pokemon.name.includes("kommo-o-totem")){
        pokemon.imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/784.png`
    }else if (pokemon.name.includes("araquanid-totem")){
        pokemon.imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/752.png`
    }else if (pokemon.name.includes("togedemaru-totem")){
        pokemon.imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/777.png`
    }else if (pokemon.id == 10181){
        pokemon.imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/718-10.png`
    }else if (pokemon.id == 10158){
        pokemon.imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/25-starter.png`
    }else if (pokemon.id == 10159){
        pokemon.imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/133-starter.png`
    }else if (pokemon.id == 10160){
        pokemon.imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/25-world-cap.png`
    }else if (pokemon.id == 10182){
        pokemon.imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/845-gulping.png`
    }else if (pokemon.id == 10183){
        pokemon.imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/845-gorging.png`
    }else if (pokemon.id == 10187){
        pokemon.imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/877-hangry.png`
    }else if (pokemon.id == 10192){
        pokemon.imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/893-dada.png`
    }




    return pokemon
}