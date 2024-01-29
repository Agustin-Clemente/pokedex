import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import Footer from '../components/footer';
import { Link } from 'react-router-dom';
import BulbaPic from "../assets/bulbasaur.gif"
import styles from "./pokemons.module.css"
import { fetchPokemons } from '../api/fetchPokemons';
import { Pokemon } from '../types/types';
import LoadingScreen from '../components/LoadingScreen';
import { waitFor } from '../utils/utils';
//import Pokemon from './pokemon';

const Pokemons = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [query, setQuery] = useState("")
    const [pokemons, setPokemons] = useState<Pokemon[]>([])
    //imagen(fetchPokemons)

    useEffect(() =>{
        const fetchAllPokemons = async() => {
            setIsLoading(true)
            await waitFor(1000)
            const allPokemons = await fetchPokemons();
            setPokemons(allPokemons)
            setIsLoading(false)
        }
        fetchAllPokemons()
    },[])

    if (isLoading || !pokemons) {
        return <LoadingScreen />
    }

    const filteredPokemons= pokemons?.filter((pokemon) => {
    //   return imagen(pokemon)
    return pokemon.name.toLowerCase().match(query.toLowerCase()) || pokemon.id.match(query)
})

    return (
        <>
        <Header query={query} setQuery={setQuery} />
        <main>
            <nav className={styles.nav}>
                {filteredPokemons?.map((pokemon) => (
                <Link key={pokemon.id} to={`/pokemons/${pokemon.name.toLowerCase()}`} className={styles.listItem}>
                    <img className={styles.listItemIcon} src={pokemon.imgSrc} alt={pokemon.name} />
                    <div className={styles.listItemText}>
                        <span>{pokemon.name}</span>
                        <span>{pokemon.id}</span>
                    </div>
                </Link>
                ))}
            </nav>
        </main>
        <Footer />
        </>
    );
};

export default Pokemons;