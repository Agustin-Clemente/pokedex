import styles from "./footer.module.css"
import PokemonPic from "../assets/pikachu.png"
import LocationPic from "../assets/pointer.png"
import ItemsPic from "../assets/pokeball.png"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
    <footer className={styles.footer}>
        <Link //onClick={(event)=> event.preventDefault()} 
        className={styles.footerLink} to="/pokemons">
            <img className={styles.footerIcon} src={PokemonPic} alt="Pokeball" />
            Pokémons
        </Link>
        <Link to="/items" //</footer>onClick={(event)=> event.preventDefault()} 
        className={styles.footerLink} >
            <img className={styles.footerIcon} src={ItemsPic} alt="Items" />
            Items
        </Link>
        <Link //onClick={(event)=> event.preventDefault()} 
        className={styles.footerLink} to="/map">
            <img className={styles.footerIcon} src={LocationPic} alt="Mapa" />
            Map
        </Link>
</footer>
    )
}


export default Footer