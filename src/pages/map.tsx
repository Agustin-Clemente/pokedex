import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { waitFor } from "../utils/utils";
import LoadingScreen from "../components/LoadingScreen";
import Footer from "../components/footer";
import styles from './map.module.css'
import pokeballImg from '../assets/pokeball.png'

const Map = () => {
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

    <main className={styles.map}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26286684.582429156!2d-84.88285970885434!3d-36.46181420923545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1694157432774!5m2!1ses-419!2sar" width="100%" height="100%" loading="lazy" ></iframe>

        </main>

    <Footer />
    </>

    
}

export default Map;