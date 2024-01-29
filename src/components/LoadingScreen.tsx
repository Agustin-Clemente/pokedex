import Pokedex from '../assets/pokedex.png'
import Styles from "./loadingScreen.module.css"

const LoadingScreen = () => {
    return <div className={Styles.loadingScreen}>
        <img className={Styles.loadingScreenIcon} src={Pokedex} alt="Pokédex" />
    </div>
}

export default LoadingScreen;