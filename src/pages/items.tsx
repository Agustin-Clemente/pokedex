import React, { useEffect, useState } from 'react'
import Footer from '../components/footer';
import { waitFor } from '../utils/utils';
import LoadingScreen from '../components/LoadingScreen';
import pokeballImg from '../assets/pokeball.png'
import styles from './items.module.css'
import { useNavigate } from 'react-router-dom';

const Items = () => {
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() =>{
        async function getItems() {
            //setIsLoading(true);
            await waitFor(1000);
            setIsLoading(false);
        }
        getItems()
    })

    if (isLoading) {
        return <LoadingScreen/>
    }
    
    return <>
    <button className={styles.pokeballButton} onClick={() => navigate(-1)}>
        <img className={styles.pokeballImg} src={pokeballImg} alt="Pokéball" /> Volver
    </button>

    <main className={styles.items}>Aún no tienes Items</main>

    <Footer />
    </>

    
}

export default Items;