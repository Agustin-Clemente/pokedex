import { ifError } from "assert";
import { formatName } from "../utils/utils";
import { Pokemon } from "../types/types";
//import Pokemon from "../pages/pokemon";

export async function fetchPokemons(): Promise<Pokemon[]> {
    //const response = await fetch("https://unpkg.com/pokemons@1.1.0/pokemons.json");
    //const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1281")

    if (!response.ok) {
        throw new Error("Failed to fetch Pokémons")
    }

    const results = await response.json()
    
    
    const pokemons = results.results.map((pokemon: any) => ({
        

        name: pokemon.name,
        //id: pokemon.national_number,
        id: pokemon.url.split("/")[6],
       //imgSrc : `https://img.pokemondb.net/sprites/black-white/anim/normal/${formatName(pokemon.name.toLowerCase())}.gif`,
        imgSrc: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Number(pokemon.url.split("/")[6])}.png`
    }))
    

    let uniquePokemons = pokemons.filter((pokemon: any, index:number) => pokemons.findIndex((other:any) => other.id === pokemon.id) === index)

    
    pokemons.filter((pokemon: any) => {
        if (pokemon.id <650) {
        pokemon.imgSrc = `https://img.pokemondb.net/sprites/black-white/anim/normal/${formatName(pokemon.name.toLowerCase())}.gif`
    } else if (pokemon.name.includes("lurantis-totem")){
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

})

    return uniquePokemons;
    
}
/*
export async function imagen(arreglo:any) {
    arreglo.forEach(async (poke: { id: any; name: string; imgSrc: any; }) => {
        if (Number(poke.id) > 150 ) {
            const response = (await fetch(`https://pokeapi.co/api/v2/pokemon/${formatName(poke.name)}`)).json()
            const result = (await response).json();
            poke.imgSrc=result.sprites.front_default
        }
    });
    
}
*/
/*
export async function imagen(poke:Pokemon) {
    if (Number(poke.id) > 150 ) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${formatName(poke.name)}`)
        const result = await response.json();
        poke.imgSrc=result.sprites.front_default
    }
}
*/
/*
results.forEach((poke: { national_number: number; }) => {
    if (poke.national_number < 151) {
        const pokemons = results.results.map((pokemon: any) => ({
            name: pokemon.name,
            id: pokemon.national_number,
            imgSrc : `https://img.pokemondb.net/sprites/black-white/anim/normal/${formatName(pokemon.name.toLowerCase())}.gif`,
        }))
        const uniquePokemons = pokemons.filter((pokemon: any, index:number) => pokemons.findIndex((other:any) => other.id === pokemon.id) === index)
        return uniquePokemons;
    }else{
        const pokemons = results.results.map((pokemon: any) => ({
            name: pokemon.name,
            id: pokemon.national_number,
            imgSrc : `https://img.pokemondb.net/sprites/black-white/anim/normal/${formatName(pokemon.name.toLowerCase())}.gif`,
        }))
        const uniquePokemons = pokemons.filter((pokemon: any, index:number) => pokemons.findIndex((other:any) => other.id === pokemon.id) === index)
        return uniquePokemons;
    }

    
});*/