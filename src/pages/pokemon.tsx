import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import pokeballImg from '../assets/pokeball.png'
import Footer from '../components/footer';
import styles from './pokemon.module.css'
import { PokemonDetails } from '../types/types';
import { fetchPokemon } from '../api/fetchPokemon';
import LoadingScreen from '../components/LoadingScreen';
import { waitFor } from '../utils/utils';

const Pokemon = () => {
    const [isLoading, setIsLoading] = useState(false)
    const {name} = useParams()
    const navigate = useNavigate()
    const [pokemon, setPokemon] = useState<PokemonDetails>()

    useEffect(() => {
        async function getPokemon() {
            setIsLoading(true)
            await waitFor(1000)
            const fetchedPokemon = await fetchPokemon(name as string)
            setPokemon(fetchedPokemon)
            setIsLoading(false)
        }
        getPokemon()
    }, [name])

    if (isLoading || !pokemon) {
        return <LoadingScreen/>
    }

    return(
    <>
    <button className={styles.pokeballButton} onClick={() => navigate(-1)}>
        <img className={styles.pokeballImg} src={pokeballImg} alt="Pokéball" /> Volver
    </button>
    <div className={styles.pokemon}>
        <main className={styles.pokemonInfo}>
            <div className={styles.pokemonName}>
                {pokemon?.name.toUpperCase()}
            </div>
            <div>N° {pokemon?.id}</div>
            <div className={styles.pokemonImg}><img src={pokemon?.imgSrc} alt={pokemon?.name} /></div>
            <div>HP: {pokemon?.hp}</div>
            <div>Ataque: {pokemon?.attack}</div>
            <div>Defensa: {pokemon?.defense}</div>
        </main>
    </div>
    <Footer />
    </> 
    )
}

export default Pokemon;